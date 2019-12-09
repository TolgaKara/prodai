"""prodai URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings
from src.homepage import views
from src.accounts import views

urlpatterns = [
    # Webpages for authenticated Users
    path('dashboard/', include('src.dashboard.urls')),
    path('timetracking/', include('src.timetracking.urls')),
    path('analytics/', include('src.analytics.urls')),
    path('projectmanagment/', include('src.projectmanagment.urls')),
    path('team/', include('src.team.urls')),
    path('profile/', views.profile_view, name='profile'),
    path('settings/', include('src.settings.urls')),

    # API Interface
    path('api/v1', include('src.api.urls')),

    # Webpages both for authenticated and not authenticated Users
    path('accounts/', include('src.accounts.urls')),

    # Webpages for not authenticated users
    path('', include('src.homepage.urls')),

    # Webpages for admins
    path('admin/', admin.site.urls),
]

urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns = urlpatterns + staticfiles_urlpatterns()
urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


