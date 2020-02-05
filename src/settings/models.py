from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Setting(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class TimeTrackingSetting(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    max_daily_work_time = models.TextField(max_length=50)
    timetracking_name = models.CharField(max_length=100)
    workingtime = models.IntegerField()
    short_break = models.IntegerField()
    long_break = models.IntegerField()
    cycle = models.IntegerField()


class ActivitiesSetting(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    block_activities = models.TextField(max_length=400)
