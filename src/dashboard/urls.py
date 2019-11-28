from django.urls import path, include

from src.dashboard import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
]