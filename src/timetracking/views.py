from django.shortcuts import render

# Create your views here.
def timetracking(request):
    return render(request, 'auth/timetracking/index.html')