# Generated by Django 2.2.6 on 2019-12-22 20:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('settings', '0003_activitiessetting'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activitiessetting',
            name='block_activitie',
            field=models.TextField(max_length=400),
        ),
    ]
