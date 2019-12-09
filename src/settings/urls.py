from django.urls import path, include

from src.settings import views

urlpatterns = [
    path('', views.settings, name='settings'),
    path('profile', views.settings_profile, name='settings_profile'),
    path('timetracking', views.settings_timetracking, name='settings_timetracking'),
    path('analytics', views.settings_analytics, name='settings_analytics'),
    path('projectmanagement', views.settings_projectmanagement, name='settings_projectmanagement'),
    path('team', views.settings_team, name='settings_team'),
    path('company', views.settings_company, name='settings_company'),
    path('authentication', views.settings_authentication, name='settings_authentication'),
]