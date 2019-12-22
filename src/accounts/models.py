import random

from django.db import models

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

class AuthProfile(models.Model):
    pass
    # img
    # social media json