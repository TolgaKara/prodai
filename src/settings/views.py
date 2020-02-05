from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .models import TimeTrackingSetting, ActivitiesSetting
from src.accounts.models import ProfileApp


# Create your views here.
def settings(request):
    if request.user.is_authenticated:
        # This is the only option how the user can access his settings
        return render(request, 'auth/settings/index.html', context={
            'content': 'home'
        })
    else:
        return redirect('homepage')


def settings_profile(request):
    profile = ProfileApp.objects.get(user=request.user)
    if request.user.is_authenticated:
        return render(request, 'auth/settings/index.html', context={
            'content': 'profile',
            'profile': profile
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
        activities = ActivitiesSetting.objects.filter(user=request.user)

    except ActivitiesSetting.DoesNotExist:
        activities = None

    if request.user.is_authenticated:
        if activities is not None:
            return render(request, 'auth/settings/index.html', context={
                'content': 'activities',
                'activities': activities
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
    max_daily_work_time = request.POST.get('max-work-time')
    max_daily_work_time = 0 if max_daily_work_time == '' else max_daily_work_time
    print(max_daily_work_time)
    timetracking_option_values = request.POST.get('timetracking_option')
    timetracking_option_values = [x.strip() for x in timetracking_option_values.split(',')]

    values_code = timetracking_option_values[0]
    values_name = timetracking_option_values[1]
    values_workingtime = timetracking_option_values[2]
    values_shortbreak = timetracking_option_values[3]
    values_longbreak = timetracking_option_values[4]
    values_cycle = timetracking_option_values[5]

    timetracking_settings = TimeTrackingSetting.objects.get(user_id=request.user.id)
    timetracking_settings.max_daily_work_time = str(max_daily_work_time)
    timetracking_settings.timetracking_name = values_code
    timetracking_settings.workingtime = values_workingtime
    timetracking_settings.short_break = values_shortbreak
    timetracking_settings.long_break = values_longbreak
    timetracking_settings.cycle = values_cycle

    timetracking_settings.save()

    return redirect('settings_timetracking')


def block_activity_post(request):
    activity = request.POST.get('activity_name')
    activity_obj, created = ActivitiesSetting.objects.get_or_create(user=request.user, block_activities=activity)

    return redirect('settings_activities')


def delete_activity_post(request):
    activity_id = request.POST.get('activity_id')
    ActivitiesSetting.objects.filter(id=activity_id).delete()
    return redirect('settings_activities')


def profile_post(request):
    profile_img = request.POST.get('profile_img')
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    gender = request.POST.get('gender')
    birthdate = request.POST.get('birthdate')
    location = request.POST.get('location')
    email = request.POST.get('email')
    multi_auth = request.POST.get('muli_auth')

    user = request.user
    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.save()

    profile_settings = ProfileApp.objects.get(user_id=request.user.id)
    profile_settings.img = profile_img
    profile_settings.gender = gender
    profile_settings.birthdate = birthdate
    profile_settings.location = location
    profile_settings.multifactor_auths = multi_auth
    profile_settings.save()
    return redirect('settings_profile')
