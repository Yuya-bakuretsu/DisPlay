from django.urls import path
from server.task.notuse import views_noUseAPI

urlpatterns = [
    # path('', views.top_menu, name='top_menu'),
    # path('', views.initial_settings, name='initial_settings'),
    path('custom/', views_noUseAPI.CustomListView.as_view(), name='custom_list'),
    # path('add_custom/', views.custom_add, name='custom_add'),
    path('custom/<int:pk>/', views_noUseAPI.custom_detail, name='custom_detail'),
    path('add_custom/', views_noUseAPI.TimeSchedule.as_view(), name='custom_add'),
    path('custom_update/<int:pk>/', views_noUseAPI.CustomUpdateView.as_view(), name='custom_update'),
    path('custom_edit/<int:pk>/', views_noUseAPI.CustomUpdateView.as_view(), name='custom_edit'),
    path('custom_delete/<int:pk>/', views_noUseAPI.CustomDeleteView.as_view(), name='custom_delete'),
    path('', views_noUseAPI.TodoListView.as_view(), name='todo_list'),
    path('todo_add/', views_noUseAPI.TodoAddView.as_view(), name='todo_add'),
    path('todo/<int:pk>/', views_noUseAPI.TodoDetailView.as_view(), name='todo_detail'),
    path('todo_edit/<int:pk>/', views_noUseAPI.TodoUpdateView.as_view(), name='todo_edit'),
    path('todo_delete/<int:pk>/', views_noUseAPI.TodoDeleteView.as_view(), name='todo_delete'),
]