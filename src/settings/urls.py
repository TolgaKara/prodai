from django.urls import path, include

from src.settings import views
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.settings, name='settings'),
    path('profile', views.settings_profile, name='settings_profile'),
    path('timetracking', views.settings_timetracking, name='settings_timetracking'),
    path('activities', views.settings_activities, name='settings_activities'),
    path('analytics', views.settings_analytics, name='settings_analytics'),
    path('projectmanagement', views.settings_projectmanagement, name='settings_projectmanagement'),
    path('team', views.settings_team, name='settings_team'),
    path('company', views.settings_company, name='settings_company'),
    path('authentication', views.settings_authentication, name='settings_authentication'),

    # POST REQUESTS
    path('timetracking/post', views.timetracking_post, name='timetracking_changed_settings'),
    path('profile/post', views.profile_post, name='profile_changed_settings'),
    path('activity/post', views.block_activity_post, name='block_activity'),
    path('activity/delete', views.delete_activity_post, name='delete_activity'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
