from django.urls import path, include

from src.accounts import views

urlpatterns = [
    path('dashboard', include('src.dashboard.urls')),
    path('signup', views.signup, name='signup'),
    path('activation', views.complete_registration, name='complete_registration'),
    path('signin', views.signin, name='signin'),
    path('logout', views.logout, name='logout'),
]