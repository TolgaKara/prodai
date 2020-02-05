from django.shortcuts import render, redirect
from .models import Homepage


# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        return render(request, template_name='homepage/index.html')
