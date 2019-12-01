from django.shortcuts import render, redirect


# Create your views here.
def dashboard(request):
    if request.user.is_authenticated:
        return render(request, 'auth/dashboard/index.html')
    else:
        return redirect('homepage')