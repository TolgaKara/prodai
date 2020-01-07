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
