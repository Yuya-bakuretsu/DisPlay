from django.urls import path
from . import views


urlpatterns = [
    # path('', views.top_menu, name='top_menu'),
    # path('', views.initial_settings, name='initial_settings'),
    path('', views.custom_list, name='custom_list'),
    # path('add_custom/', views.custom_add, name='custom_add'),
    path('custom/<int:pk>/', views.custom_detail, name='custom_detail'),
    path('add_custom/', views.TimeSchedule.as_view(), name='custom_add'),
    path('todo/', views.TodoListView.as_view(), name='todo_list'),
    path('todo_add/', views.TodoAddView.as_view(), name='todo_add'),
    path('todo_delete/<int:pk>', views.TodoDeleteView.as_view(), name='todo_delete'),
]