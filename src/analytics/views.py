from django.shortcuts import render, redirect


# Create your views here.
def analytics(request):
    if request.user.is_authenticated:
        return render(request, 'auth/analytics/index.html')
    else:
        return redirect('homepage')