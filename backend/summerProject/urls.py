from django.contrib import admin
from django.urls import path, include
# from django.contrib.auth import views

app_name = "task"
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('task.urls')),
]