from django.urls import path, include

from .views import dashboard, get_json_data_for_charts

urlpatterns = [
    path('', dashboard, name='dashboard'),
    path(r'api/data/', get_json_data_for_charts, name='api-data')
]