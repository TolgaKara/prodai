from django.shortcuts import render, redirect
from datetime import datetime
import requests
import json
from django.conf import settings
from django.contrib.gis.geoip2 import GeoIP2
from src.settings.models import TimeTrackingSetting


# Create your views here.
def get_weekday_name():
    weekday_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    weekday_number = datetime.today().weekday()
    return weekday_names[weekday_number]

def get_timetracking_friendly_name(request, timetracking_settings):
    timetracking_name = timetracking_settings.timetracking_name
    if(timetracking_name == 'default'):
        return 'Track all the time'
    elif(timetracking_name == 'pomodoro_general'):
        return 'Pomodoro General'
    elif(timetracking_name == 'pomodoro_work'):
        return 'Pomodoro Work'
    elif (timetracking_name == 'pomodoro_personal'):
        return 'Pomodoro Personal'
    elif (timetracking_name == 'custom'):
        return 'Custom'


def dashboard(request):
    if request.user.is_authenticated:
        timetracking_settings = TimeTrackingSetting.objects.get(user_id=request.user.id)
        timetracking_name = get_timetracking_friendly_name(request, timetracking_settings)

        weekday = get_weekday_name()
        date = datetime.today().date()
        return render(request, 'auth/dashboard/index.html', context={
            'weekday': weekday,
            'date': date,
            'timetracking_code' : timetracking_settings.timetracking_name,
            'timetracking_name' : timetracking_name,
            'timetracking_working_time': timetracking_settings.workingtime,
            'timetracking_short_breaks': timetracking_settings.short_break,
            'timetracking_long_breaks': timetracking_settings.long_break,
            'timetracking_cycle': timetracking_settings.cycle
        })
    else:
        return redirect('homepage')
