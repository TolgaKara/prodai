from django.shortcuts import render


# Create your views here.
def team(request):
    if request.user.is_authenticated:
        # This is the access point
        return render(request, 'auth/team/index.html')
    else:
        return redirect('homepage')
