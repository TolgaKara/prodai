from django.urls import path, include

from src.api import views

urlpatterns = [
    path('', views.api, name='api_overview'),
    path('track/activities/', views.timetracking_activities, name='api_timetracking'),
    path('check/authentication/', views.check_auth, name='api_timetracking')

]
