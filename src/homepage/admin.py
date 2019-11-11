from django.contrib import admin
from .models import Homepage

admin.site.site_header = "Prodai Admin"
admin.site.site_title = "Prodai Admin Area"
admin.site.index_title = "Welcome to the Prodai admin area"

# Register your models here.
admin.site.register(Homepage)
