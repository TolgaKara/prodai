from django.contrib import auth
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from src.settings.models import ActivitiesSetting
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
def api(request):
    return None

@csrf_exempt
def timetracking_activities(request):
    if request.method != 'POST':
        return
    username = ""
    password = ""
    json_body = json.loads(request.body)
    for data in json_body:
        if data == 'authentifications':
            auth_data = json_body[data]
            username = auth_data["username"]
            password = auth_data["password"]
            print(username)

    print(type(json_body))
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





