from django.contrib import auth
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from src.settings.models import ActivitiesSetting
from src.activity.models import TrackedActivities
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
def api(request):
    return None


@csrf_exempt
def timetracking_activities(request):
    if request.method != 'POST':
        return
    user = ""
    try:
        posted_json_content = json.loads(request.body)
    except json.decoder.JSONDecodeError:
        return JsonResponse({
            'status_code': 404,
            'messages': 'File is empty and so not ready to assign to the Database'
        })


    for data in posted_json_content:
        if data == 'authentifications':
            auth_data = posted_json_content[data]
            global username
            username = auth_data["username"]
            password = auth_data["password"]
            break
        if data == 'activities':
            for activities_data in posted_json_content[data]:
                activity_name = activities_data['name']
                time_entries = activities_data['time_entries'][0]
                days = time_entries['days']
                end_time = time_entries['end_time']
                hours = time_entries['hours']
                minutes = time_entries['minutes']
                seconds = time_entries['seconds']
                start_time = time_entries['start_time']

                tracked_activity_obj = TrackedActivities.objects.create(username=username, activity_name=activity_name,
                                                                        days=days, end_time=end_time,
                                                                        hours=hours, minutes=minutes, seconds=seconds,
                                                                        start_time=start_time)
                tracked_activity_obj.save()

    return JsonResponse({
        'status_code': 200,

    })


def get_blocked_activities(user_obj):
    check_activities = ActivitiesSetting.objects.filter(user=user_obj).exists()

    if check_activities:
        return ActivitiesSetting.objects.get(user=user_obj)
    else:
        return None


def check_auth(request):
    username = request.GET.get('username')
    password = request.GET.get('password')

    user = auth.authenticate(username=username, password=password)
    if user is None:
        response = JsonResponse({
            'status_code': 404,
            'message': 'Sadly your credentials are wrong. Please try again.'
        })
    else:
        user_obj = User.objects.get(username=username)

        block_activities_obj = get_blocked_activities(user_obj)

        response = JsonResponse({
            'status_code': 200,
            'message': "Success the credentials are correct. We now start your Script.",
            'activities': {
                'block_activities': block_activities_obj
            },
        })
    return response
