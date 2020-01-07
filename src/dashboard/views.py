from django.shortcuts import render, redirect
from datetime import datetime
import requests
import json
from django.conf import settings
from src.settings.models import TimeTrackingSetting
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

def get_tracked_activities(requests):
    TrackedActivities.objects.filter(username=requests.user.username)
    return None


def get_daily_worktime(request):
    tracked_activities_obj = TrackedActivities.objects.filter(username=request.user.username)
    current_date = get_current_date_sql_format()
    days = 0
    hours = 0  # / 24 = 1 day
    minutes = 0  # / 60 = 1 hour
    seconds = 0  # / 60 = 1 minute

    for track_activy in tracked_activities_obj:
        if track_activy.start_time[:10] == current_date:
            days += track_activy.days
            hours += track_activy.hours
            minutes += track_activy.minutes
            seconds += track_activy.seconds

    if seconds % 60 != 0:
        minutes += seconds / 60
        seconds %= 60

    if minutes % 60 != 0:
        hours += minutes / 60
        minutes %= 60

    hours = int(hours)
    minutes = int(minutes)
    seconds = int(seconds)

    if(hours == 0 and minutes == 0 and seconds == 0):
        return '00:00:00'

    return str(int(hours)) + ':' + str(int(minutes)) + ':' + str(seconds)


def dashboard(request):
    if request.user.is_authenticated:
        timetracking_settings = TimeTrackingSetting.objects.get(user_id=request.user.id)
        timetracking_name = get_timetracking_friendly_name(request, timetracking_settings)

        weekday = get_weekday_name()
        date = datetime.today().date()

        daily_worktime = get_daily_worktime(request)
        tracked_activities = get_tracked_activities()
        print('total',daily_worktime)

        return render(request, 'auth/dashboard/index.html', context={
            'weekday': weekday,
            'date': date,
            'daily_worktime':daily_worktime,
            'timetracking_code': timetracking_settings.timetracking_name,
            'timetracking_name': timetracking_name,
            'timetracking_working_time': timetracking_settings.workingtime,
            'timetracking_short_breaks': timetracking_settings.short_break,
            'timetracking_long_breaks': timetracking_settings.long_break,
            'timetracking_cycle': timetracking_settings.cycle
        })
    else:
        return redirect('homepage')
