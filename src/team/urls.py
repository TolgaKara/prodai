from django.urls import path, include

from src.team import views

urlpatterns = [
    path('', views.team, name='team'),
]