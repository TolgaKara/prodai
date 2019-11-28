from django.urls import path, include

from src.timetracking import views

urlpatterns = [
    path('', views.timetracking, name='timetracking'),
]