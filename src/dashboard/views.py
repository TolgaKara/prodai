from django.db.models import Count, Sum
from django.http import JsonResponse
from django.shortcuts import render, redirect
import datetime

import requests
import json
from django.conf import settings
from src.settings.models import TimeTrackingSetting, ActivitiesSetting
from src.activity.models import TrackedActivities


# Create your views here.
def get_weekday_name():
    weekday_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    weekday_number = datetime.datetime.today().weekday()
    return weekday_names[weekday_number]


def get_timetracking_friendly_name(request, timetracking_settings):
    timetracking_name = timetracking_settings.timetracking_name
    if (timetracking_name == 'default'):
        return 'Track all the time'
    elif (timetracking_name == 'pomodoro_general'):
        return 'Pomodoro General'
    elif (timetracking_name == 'pomodoro_work'):
        return 'Pomodoro Work'
    elif (timetracking_name == 'pomodoro_personal'):
        return 'Pomodoro Personal'
    elif (timetracking_name == 'custom'):
        return 'Custom'


def get_current_date_sql_format():
    current_day = '{:02d}'.format(datetime.datetime.today().day)
    current_month = '{:02d}'.format(datetime.datetime.today().month)
    current_year = datetime.datetime.today().year
    return str(current_day) + '-' + str(current_month) + '-' + str(current_year)


def validate_time(hours, minutes, seconds):
    if seconds % 60 != 0:
        minutes += seconds / 60
        seconds %= 60

    if minutes % 60 != 0:
        hours += minutes / 60
        minutes %= 60

    return [int(hours), int(minutes), int(seconds)]


# TODO Sorting the Table in Dashboard
# def sort_tracked_activity_list(tracked_activities):
#
#     print(tracked_activities)
#     sorted_tracked_activities = []
#     for activity in tracked_activities:
#         hours = activity['hours']
#         minutes = activity['minutes']
#         seconds = activity['seconds']
#
#         for activity2 in tracked_activities:
#             hours2 = activity2['hours']
#             minutes2 = activity2['minutes']
#             seconds2 = activity2['seconds']
#
#             if hours > hours2:
#                 sorted_tracked_activities.append(
#                     [activity['activity_name'], activity['hours'], activity['minutes'], activity['seconds']])
#                 print('hour bigger')
#                 break
#
#
#             if minutes > minutes2:
#                 sorted_tracked_activities.append(
#                     [activity['activity_name'], activity['hours'], activity['minutes'], activity['seconds']])
#                 print('minutes bigger')
#                 break
#
#             if seconds > seconds2:
#                 sorted_tracked_activities.append(
#                     [activity['activity_name'], activity['hours'], activity['minutes'], activity['seconds']])
#                 print('seconds bigger')
#                 break
#
#     print(sorted(tracked_activities[0].i, key=lambda x : x[1]))


def get_tracked_activities(request):
    current_date = get_current_date_sql_format()
    tracked_activities_obj = TrackedActivities.objects.filter(username=request.user.username,
                                                              start_time__contains=current_date)

    dataset_exist = TrackedActivities.current_active_activities(tracked_activities_obj, get_current_date_sql_format())
    print(dataset_exist)
    if dataset_exist:

        summed_tracked_activities = tracked_activities_obj.values('activity_name').annotate(Sum('hours'),
                                                                                            Sum('minutes'),
                                                                                            Sum('seconds'))
        tracked_activities_list = []
        number = 0
        for activities_dataset in summed_tracked_activities:
            number += 1
            for activity_data in activities_dataset:

                activity_name = activities_dataset['activity_name']
                if activity_name == '':
                    activity_name = 'Unsupported Application'

                hours = activities_dataset['hours__sum']
                minutes = activities_dataset['minutes__sum']
                seconds = activities_dataset['seconds__sum']

                time_list = validate_time(hours, minutes, seconds)
                hours = '{:02d}'.format(time_list[0])
                minutes = '{:02d}'.format(time_list[1])
                seconds = '{:02d}'.format(time_list[2])
                time_spent = hours + ':' + minutes + ':' + seconds
                tracked_activities_list.append(
                    {'index': str(number), 'activity_name': activity_name, 'time_spent': time_spent}
                )

                break

        # tracked_activities_list = sort_tracked_activity_list(tracked_activities_list)
        return tracked_activities_list
    return [{'index': '', 'activity_name': '', 'time_spent': ''}]


def get_daily_worktime(request):
    tracked_activities_obj = TrackedActivities.objects.filter(username=request.user.username)
    current_date = get_current_date_sql_format()
    days = 0
    hours = 0  # / 24 = 1 day
    minutes = 0  # / 60 = 1 hour
    seconds = 0  # / 60 = 1 minute

    for track_activity in tracked_activities_obj:
        if track_activity.start_time[:10] == current_date:
            days += track_activity.days
            hours += track_activity.hours
            minutes += track_activity.minutes
            seconds += track_activity.seconds

    time_list = validate_time(hours, minutes, seconds)

    hours = time_list[0]
    minutes = time_list[1]
    seconds = time_list[2]

    if (hours == 0 and minutes == 0 and seconds == 0):
        return '00:00:00'

    return '%02d:%02d:%02d' % (int(hours), int(minutes), seconds)


def get_procrastination_time(request, block_activities):
    proc_time_list = []
    max_seconds = 0
    tracked_activities = get_tracked_activities(request)
    for track_activities in tracked_activities:
        for block_activity in block_activities:

            if track_activities.get('activity_name') == block_activity.get('block_activities'):
                proc_time_list.append(track_activities.get('time_spent'))

    for proc_time in proc_time_list:
        splitted_time = [int(i) for i in proc_time.split(':')]
        max_seconds += (splitted_time[0] * 60 + splitted_time[1]) * 60 + splitted_time[2]

    max_seconds, seconds = divmod(max_seconds, 60)
    hours, minutes = divmod(max_seconds, 60)
    return '%02d:%02d:%02d' % (hours, minutes, seconds)


def get_productivity_time(request, block_activities):
    daily_worktime = get_daily_worktime(request).split(':')
    procrastination_time = get_procrastination_time(request, block_activities).split(':')

    daily_worktime = datetime.timedelta(hours=int(daily_worktime[0]), minutes=int(daily_worktime[1]),
                                        seconds=int(daily_worktime[2]))
    procrastination_time = datetime.timedelta(hours=int(procrastination_time[0]), minutes=int(procrastination_time[1]),
                                              seconds=int(procrastination_time[2]))

    productivity_time = str(daily_worktime - procrastination_time).split(':')
    productivity_hours = int(productivity_time[0])
    productivity_minutes = int(productivity_time[1])
    productivity_seconds = int(productivity_time[2])

    print('timedelta2', procrastination_time - daily_worktime)

    return '%02d:%02d:%02d' % (productivity_hours, productivity_minutes, productivity_seconds)


def calculate_max_daily_work_time(request, max_daily_work_time):
    daily_worked_time = get_daily_worktime(request)
    hours = int(max_daily_work_time)
    minutes = 0
    seconds = 0
    daily_worked_time_list = daily_worked_time.split(':')

    daily_worked_hours = int(daily_worked_time_list[0])
    daily_worked_minutes = int(daily_worked_time_list[1])
    daily_worked_seconds = int(daily_worked_time_list[2])

    daily_worked_time = datetime.time(daily_worked_hours, daily_worked_minutes, daily_worked_seconds)

    max_daily_work_time = datetime.time(hours, minutes, seconds)

    status_color = ''

    max_work_time = datetime.datetime.combine(datetime.date.today(), max_daily_work_time) - datetime.datetime.combine(
        datetime.date.today(), daily_worked_time)
    hours_max = '{:02d}'.format(hours)
    minutes_max = '{:02d}'.format(minutes)
    seconds_max = '{:02d}'.format(seconds)

    return {'max_daily_work_time': max_work_time, 'status_color': status_color}


def get_procrastination_percentage(procrastination_time, timetracking_max_workhours):
    procrastination_time_list = procrastination_time.split(':')
    proc_hours = int(procrastination_time_list[0])
    proc_minutes = int(procrastination_time_list[1])
    proc_seconds = int(procrastination_time_list[2])
    procrastination_time = datetime.timedelta(hours=proc_hours, minutes=proc_minutes, seconds=proc_seconds)

    max_hours = int(timetracking_max_workhours)
    max_minutes = 0
    max_seconds = 0
    max_time = datetime.timedelta(hours=max_hours, minutes=max_minutes, seconds=max_seconds)

    percentage_procrastination = procrastination_time / max_time * 100
    return str('%.2f' % percentage_procrastination) + ' %'

def get_productivity_percentage(productivity_time, timetracking_max_workhours):

    productivity_time_list = productivity_time.split(':')
    prod_hours = int(productivity_time_list[0])
    prod_minutes = int(productivity_time_list[1])
    prod_seconds = int(productivity_time_list[2])
    productivity_time = datetime.timedelta(hours=prod_hours, minutes=prod_minutes, seconds=prod_seconds)

    max_hours = int(timetracking_max_workhours)
    max_minutes = 0
    max_seconds = 0
    max_time = datetime.timedelta(hours=max_hours, minutes=max_minutes, seconds=max_seconds)

    percentage_productivity = productivity_time / max_time * 100

    return str('%.2f' % percentage_productivity) + ' %'


def get_json_data_for_charts(request):
    data = {
        'percentage_comparison':{
            'productivity': 100,
            'procrastination': 200
        }

    }
    return JsonResponse(data)


def dashboard(request):
    if request.user.is_authenticated:
        timetracking_settings = TimeTrackingSetting.objects.get(user_id=request.user.id)
        timetracking_name = get_timetracking_friendly_name(request, timetracking_settings)
        timetracking_max_workhours = calculate_max_daily_work_time(request, timetracking_settings.max_daily_work_time)
        blocked_activities = ActivitiesSetting.objects.filter(user=request.user).values('block_activities')

        weekday = get_weekday_name()
        date = datetime.datetime.today().date()

        daily_worktime = get_daily_worktime(request)
        productivity_time = get_productivity_time(request, blocked_activities)
        procrastination_time = get_procrastination_time(request, blocked_activities)

        productivity_percentage = get_productivity_percentage(productivity_time,
                                                              timetracking_settings.max_daily_work_time)
        procrastination_percentage = get_procrastination_percentage(procrastination_time,
                                                                    timetracking_settings.max_daily_work_time)

        tracked_activities = get_tracked_activities(request)

        #json_percentage_comparison = get_json_data_for_charts(request)
        #json_productivity_apps_comparison = get_json_data_for_charts(request)
        #json_procrastination_apps_comparison = get_json_data_for_charts(request)


        return render(request, 'auth/dashboard/index.html', context={
            'weekday': weekday,
            'tracked_activities': tracked_activities,
            'blocked_activities': blocked_activities,
            'date': date,
            'daily_worktime': daily_worktime,
            'productivity_worktime': productivity_time,
            'procrastination_time': procrastination_time,
            'procrastination_percentage': procrastination_percentage,
            'productivity_percentage': productivity_percentage,
            'timetracking_max_workhours': timetracking_max_workhours,
            'timetracking_code': timetracking_settings.timetracking_name,
            'timetracking_name': timetracking_name,
            'timetracking_working_time': timetracking_settings.workingtime,
            'timetracking_short_breaks': timetracking_settings.short_break,
            'timetracking_long_breaks': timetracking_settings.long_break,
            'timetracking_cycle': timetracking_settings.cycle
        })
    else:
        return redirect('homepage')
