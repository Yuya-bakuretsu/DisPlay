from django.urls import path
from . import views


urlpatterns = [
    # path('', views.top_menu, name='top_menu'),
    # path('', views.initial_settings, name='initial_settings'),
    path('', views.custom_list, name='custom_list'),
    # path('add_custom/', views.custom_add, name='custom_add'),
]