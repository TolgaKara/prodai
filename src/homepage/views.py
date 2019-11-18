from django.shortcuts import render
from .models import Homepage

# Create your views here.
def index(request):
    return render(request, template_name='homepage/index.html')

def signup(request):
    return render(request, template_name='components/signup.html')

def signin(request):
    return render(request, template_name='components/signin.html')
