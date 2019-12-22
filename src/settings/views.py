from django.shortcuts import render, redirect
from src.settings.models import TimeTrackingSetting
from src.settings.models import ActivitiesSetting


# Create your views here.
def settings(request):
    if request.user.is_authenticated:
        # This is the only option how the user can access his settings
        return render(request,'auth/settings/index.html',context={
            'content':'home'
        })
    else:
        return redirect('homepage')


def settings_profile(request):
    if request.user.is_authenticated:
        return render(request, 'auth/settings/index.html', context={
            'content' : 'profile'
        })
    else:
        return redirect('homepage')


def settings_timetracking(request):
    try:
        timetracking_settings = TimeTrackingSetting.objects.get(user_id=request.user.id)
    except ActivitiesSetting.DoesNotExist:
        timetracking_settings = None

    if request.user.is_authenticated:
        if timetracking_settings is not None:
            return render(request, 'auth/settings/index.html', context={
                'content': 'timetracking',
                'timetracking_option': timetracking_settings.timetracking_name
            })
        else:
            return render(request, 'auth/settings/index.html', context={
                'content': 'timetracking',
                'timetracking_option': None
            })
    else:
        return redirect('homepage')

def settings_activities(request):
    try:
        activities_settings = ActivitiesSetting.objects.get(user_id=request.user.id)
    except ActivitiesSetting.DoesNotExist:
        activities_settings = None

    if request.user.is_authenticated:
        if activities_settings is not None:
            return render(request, 'auth/settings/index.html', context={
                'content': 'activities',
                'blocked_activities': activities_settings.activities_blocked_list
            })
        else:
            return render(request, 'auth/settings/index.html', context={
                'content': 'activities',
                'blocked_activities': None
            })
    else:
        return redirect('homepage')


def settings_analytics(request):
    if request.user.is_authenticated:
        return render(request, 'auth/settings/index.html', context={
            'content': 'analytics'
        })
    else:
        return redirect('homepage')


def settings_projectmanagement(request):
    if request.user.is_authenticated:
        return render(request, 'auth/settings/index.html', context={
            'content': 'projectmanagement'
        })
    else:
        return redirect('homepage')


def settings_team(request):
    if request.user.is_authenticated:
        return render(request, 'auth/settings/index.html', context={
            'content': 'team'
        })
    else:
        return redirect('homepage')


def settings_company(request):
    if request.user.is_authenticated:
        return render(request, 'auth/settings/index.html', context={
            'content': 'company'
        })
    else:
        return redirect('homepage')


def settings_authentication(request):
    if request.user.is_authenticated:
        return render(request, 'auth/settings/index.html', context={
            'content': 'authentication'
        })
    else:
        return redirect('homepage')


def timetracking_post(request):
    values = request.POST.get('timetracking_option')
    values = [x.strip() for x in values.split(',')]

    values_code = values[0]
    values_name = values[1]
    values_workingtime = values[2]
    values_shortbreak = values[3]
    values_longbreak = values[4]
    values_cycle = values[5]

    timetracking_settings = TimeTrackingSetting.objects.get(user_id=request.user.id)
    timetracking_settings.timetracking_name = values_code
    timetracking_settings.workingtime = values_workingtime
    timetracking_settings.short_break = values_shortbreak
    timetracking_settings.long_break = values_longbreak
    timetracking_settings.cycle = values_cycle

    timetracking_settings.save()


    return redirect('settings_timetracking')