from django.urls import path
from . import views


urlpatterns = [
    # path('', views.top_menu, name='top_menu'),
    # path('', views.initial_settings, name='initial_settings'),
    path('custom/', views.CustomListView.as_view(), name='custom_list'),
    # path('add_custom/', views.custom_add, name='custom_add'),
    path('custom/<int:pk>/', views.custom_detail, name='custom_detail'),
    path('add_custom/', views.TimeSchedule.as_view(), name='custom_add'),
    path('custom_update/<int:pk>/', views.CustomUpdateView.as_view(), name='custom_update'),
    path('custom_edit/<int:pk>/', views.CustomUpdateView.as_view(), name='custom_edit'),
    path('custom_delete/<int:pk>/', views.CustomDeleteView.as_view(), name='custom_delete'),
    path('', views.TodoListView.as_view(), name='todo_list'),
    path('todo_add/', views.TodoAddView.as_view(), name='todo_add'),
    path('todo/<int:pk>/', views.TodoDetailView.as_view(), name='todo_detail'),
    path('todo_edit/<int:pk>/', views.TodoUpdateView.as_view(), name='todo_edit'),
    path('todo_delete/<int:pk>/', views.TodoDeleteView.as_view(), name='todo_delete'),
]