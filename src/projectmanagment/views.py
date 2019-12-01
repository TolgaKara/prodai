from django.shortcuts import render, redirect


# Create your views here.
def projectmanagment(request):
    if request.user.is_authenticated:
        return render(request, 'auth/projectmanagment/index.html')
    else:
        return redirect('homepage')