# Generated by Django 3.0.2 on 2020-01-06 17:13

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('activity', '0002_trackedactivities_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trackedactivities',
            name='user',
        ),
        migrations.AddField(
            model_name='trackedactivities',
            name='username',
            field=models.TextField(default=None, max_length=500),
            preserve_default=False,
        ),
    ]
