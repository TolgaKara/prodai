from django.urls import path, include

from src.dashboard import views

urlpatterns = [
    path('dashboard', views.dashboard, name='dashboard'),
]