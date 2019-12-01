from django.urls import path, include

from src.settings import views

urlpatterns = [
    path('', views.settings, name='settings'),
]