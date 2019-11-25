from django.shortcuts import render
from .models import Homepage

# Create your views here.
def index(request):
    return render(request, template_name='homepage/index.html')
