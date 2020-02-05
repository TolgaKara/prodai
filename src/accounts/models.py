import random

from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Account(models.Model):
    def __str__(self):
        return self.name

    def generate_activation_key(self):
        activation_key = ''
        length_activation_key = 6
        alphabet_and_letters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890'

        for i in range(0, length_activation_key):
            activation_key += random.choice(alphabet_and_letters)

        return activation_key


class ProfileApp(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='images', blank=True)
    facebook = models.TextField(default=None, null=True)
    instagram = models.TextField(default=None, null=True)
    linkedin = models.TextField(default=None, null=True)
    github = models.TextField(default=None, null=True)
    gender = models.TextField(default=None, null=True)
    birthdate = models.TextField(default=None, null=True)
    location = models.TextField(default=None, null=True)
    multifactor_auths = models.TextField(default=None, null=True)
