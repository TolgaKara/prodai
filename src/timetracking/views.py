from django.shortcuts import render, redirect


# Create your views here.
def timetracking(request):
    if request.user.is_authenticated:
        return render(request, 'auth/timetracking/index.html')
    else:
        return redirect('homepage')