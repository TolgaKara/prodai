from django.urls import path, include

from src.projectmanagment import views

urlpatterns = [
    path('', views.projectmanagment, name='projectmanagment'),
]
