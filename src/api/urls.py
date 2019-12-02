from django.urls import path, include

from src.api import views

urlpatterns = [
    path('', views.api, name='overview'),
    path('timetracking_activities', views.timetracking_activities, name='api_timetracking')
]