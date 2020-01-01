from django.contrib import auth
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from src.settings.models import ActivitiesSetting


# Create your views here.
def api(request):
    return None

def timetracking_activities(request):
    print('POST Activities got triggered')


def get_blocked_activities(user_obj):
    check_activities = ActivitiesSetting.objects.filter(user=user_obj).exists()

    if check_activities:
        block_activities_obj = ActivitiesSetting.objects.get(user=user_obj)
        return block_activities_obj
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





