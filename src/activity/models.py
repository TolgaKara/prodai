from django.contrib.auth.models import User
from django.db import models
from src.core.models import TimeStampedModel

# Create your models here.
class TrackedActivities(TimeStampedModel):
    username = models.TextField(max_length=500)
    activity_name = models.TextField(max_length=100)
    days = models.IntegerField()
    end_time = models.TextField(max_length=100)
    hours = models.IntegerField()
    minutes = models.IntegerField()
    seconds = models.IntegerField()
    start_time = models.TextField(max_length=100)

    def current_active_activities(self, current_date):
        return any(activity.start_time[:10] == current_date for activity in self)

    def get_daily_activities(self, request, current_date):
        pass
