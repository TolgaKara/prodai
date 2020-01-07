from django.db.models import Count, Sum
from django.shortcuts import render, redirect
from datetime import datetime
import requests
import json
from django.conf import settings
from src.settings.models import TimeTrackingSetting, ActivitiesSetting
from src.activity.models import TrackedActivities


# Create your views here.
def get_weekday_name():
    weekday_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    weekday_number = datetime.today().weekday()
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
    current_day = '{:02d}'.format(datetime.today().day)
    current_month = '{:02d}'.format(datetime.today().month)
    current_year = datetime.today().year
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
    tracked_activities_obj = TrackedActivities.objects.filter(username=request.user.username)
    summed_tracked_activities = tracked_activities_obj.values('activity_name').annotate(Sum('hours'), Sum('minutes'),
                                                                                        Sum('seconds'))
    tracked_activities_list = []
    number = 0
    for activities_dataset in summed_tracked_activities:
        number += 1
        for activity_data in activities_dataset:
            activity_name = activities_dataset['activity_name']
            hours = activities_dataset['hours__sum']
            minutes = activities_dataset['minutes__sum']
            seconds = activities_dataset['seconds__sum']

            time_list = validate_time(hours, minutes, seconds)
            hours = '{:02d}'.format(time_list[0])
            minutes = '{:02d}'.format(time_list[1])
            seconds = '{:02d}'.format(time_list[2])
            time_spent = hours + ':' + minutes + ':' + seconds
            tracked_activities_list.append(
                {'index': number, 'activity_name': activity_name, 'time_spent': time_spent}
            )

            break

    # tracked_activities_list = sort_tracked_activity_list(tracked_activities_list)
    return tracked_activities_list


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

    return str(int(hours)) + ':' + str(int(minutes)) + ':' + str(seconds)


def dashboard(request):
    if request.user.is_authenticated:
        timetracking_settings = TimeTrackingSetting.objects.get(user_id=request.user.id)
        timetracking_name = get_timetracking_friendly_name(request, timetracking_settings)

        weekday = get_weekday_name()
        date = datetime.today().date()

        daily_worktime = get_daily_worktime(request)
        tracked_activities = get_tracked_activities(request)
        blocked_activities = ActivitiesSetting.objects.filter(user=request.user).values('block_activities')

        print(blocked_activities)


        return render(request, 'auth/dashboard/index.html', context={
            'weekday': weekday,
            'tracked_activities': tracked_activities,
            'blocked_activities': blocked_activities,
            'date': date,
            'daily_worktime': daily_worktime,
            'timetracking_code': timetracking_settings.timetracking_name,
            'timetracking_name': timetracking_name,
            'timetracking_working_time': timetracking_settings.workingtime,
            'timetracking_short_breaks': timetracking_settings.short_break,
            'timetracking_long_breaks': timetracking_settings.long_break,
            'timetracking_cycle': timetracking_settings.cycle
        })
    else:
        return redirect('homepage')
