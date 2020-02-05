from django.urls import path, include

from src.analytics import views

urlpatterns = [
    path('', views.analytics, name='analytics'),
]
