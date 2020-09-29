from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
# from django.contrib.auth import views


app_name = "task"
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', obtain_jwt_token),
    path('', include('task.urls')),
]