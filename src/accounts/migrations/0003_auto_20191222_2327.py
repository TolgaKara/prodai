# Generated by Django 2.2.6 on 2019-12-22 22:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0002_authprofile'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfileApp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(blank=True, upload_to='images')),
                ('facebook', models.TextField(default=None)),
                ('instagram', models.TextField(default=None)),
                ('linkedin', models.TextField(default=None)),
                ('github', models.TextField(default=None)),
                ('gender', models.TextField(default=None)),
                ('birthdate', models.TextField(default=None)),
                ('location', models.TextField(default=None)),
                ('multifactor_auths', models.TextField(default=None)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='AuthProfile',
        ),
    ]