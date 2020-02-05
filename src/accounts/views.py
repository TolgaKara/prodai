# -*- coding: utf-8 -*-

from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User
from . import models
from django.conf import settings
from django.contrib.auth.decorators import login_required
from src.settings.models import TimeTrackingSetting


def complete_registration(request):
    print(request.method)
    if request.method == 'POST':
        activation_code = request.POST['activation_code']
        activation_code2 = request.POST['activation_code2']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        is_activation_code_matched = activation_code == activation_code2
        print(is_activation_code_matched)
        if is_activation_code_matched:
            user = User.objects.create_user(username=username, email=email, password=password,
                                            first_name=first_name,
                                            last_name=last_name)
            user.save()

            user_setting = TimeTrackingSetting.objects.create(user=user, timetracking_name='default', workingtime=0,
                                                              short_break=0, long_break=0, cycle=0)
            user_setting.save()
            profile = models.ProfileApp.objects.create(user=user, img='', facebook='', instagram='', linkedin='',
                                                       github='', gender='', birthdate='', location='',
                                                       multifactor_auths='')
            profile.save()

            return redirect('dashboard')
        else:
            messages.error(request, 'The activation code is wrong')
            return render(
                request,
                'components/registration_activation_code_page.html',
                context={
                    'activation_key': activation_code2,
                    'username': username,
                    'email': email,
                    'password': password,
                    'first_name': first_name,
                    'last_name': last_name}
            )

    else:
        print('GET')

    return redirect('signup')


def signup(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        if request.method == 'POST':
            first_name = request.POST['first_name']
            last_name = request.POST['last_name']
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']
            repeated_password = request.POST['repeated_password']
            is_checked = not (not request.POST.getlist('checkbox'))

            password_match = password == repeated_password

            if is_checked:
                if password_match:
                    if not User.objects.filter(username=username).exists():
                        # Check email
                        if not User.objects.filter(email=email).exists():
                            activation_code = models.Account().generate_activation_key()
                            subject = 'Confirmation E-Mail to your new Account on Prodai'
                            message = '''
                            Hello {1} {2}, 
                            
                            I hope you will be having fun and increase your productivity on Prodai. 
                            Complete the registration by typing in this activation Key
                            Activation Code: {0}
                            
                            Best Regards
                            Your Prodai Team
                                        '''.format(activation_code, first_name, last_name)
                            email_from = settings.EMAIL_HOST_USER
                            recipient_list = [email, ]

                            # TODO Nice to have the activation key bold in the sendmail messages
                            # TODO Nice to have a url in the email for getting to activation (a column which will tick check if its activated)
                            send_mail(subject=subject, message=message, from_email=email_from,
                                      recipient_list=recipient_list)
                            print(activation_code)
                            return render(request=request,
                                          template_name='components/registration_activation_code_page.html',
                                          context={
                                              'activation_key': activation_code,
                                              'username': username,
                                              'email': email,
                                              'password': password,
                                              'first_name': first_name,
                                              'last_name': last_name
                                          }
                                          )

                        else:
                            messages.error(request, 'E-Mail is already registered')
                            return redirect('signup')
                    else:
                        messages.error(request, 'Username is already in use')
                        return redirect('signup')
                else:
                    messages.error(request, 'Password do not match')
                    return redirect('signup')
            else:
                messages.error(request,
                               'You need to confirm the term of use and the privacy policy to register on Prodai')
                return redirect('signup')
        else:
            return render(request, template_name='components/signup.html')


def signin(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']

            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user=user)
                messages.success(request, 'You are now logged in!')
                return redirect('dashboard')
            else:
                messages.error(request, 'Sadly the credentials are invalid')
                return redirect('signin')

            # Login User Logic
            # Login redirect to dashboard
            return redirect('signup')
        else:
            return render(request, template_name='components/signin.html')


def logout(request):
    if request.method == 'POST':
        # Logout User Logic
        # Redirect homepage
        # Nice to have would be custom Pageloader with a sad image that he is leaving us
        auth.logout(request)
        messages.success(request, 'You are now logout.')
        return redirect('homepage')
    else:
        messages.error(request, 'You can not logout by Typing in the Path. Please use the dropdown Logout button.')
        return redirect('dashboard')


def profile_view(request):
    if request.user.is_authenticated:
        profile_obj = models.ProfileApp.objects.filter(user=request.user)[0]
        print(profile_obj.gender)
        if profile_obj.gender is not '':
            print(True)
        else:
            print(False)

        return render(request, 'auth/profile/index.html', context={
            'profile': profile_obj

        })
    else:
        return redirect('homepage')
