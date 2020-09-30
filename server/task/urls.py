from django.urls import path
from .views import *

urlpatterns = [
    path('users/', UserList.as_view()),
    path('create-users/', UserCreate.as_view()),
    path('users/<pk>/', UserRetrieveUpdate.as_view()),
    path('customs/', CustomListCreate.as_view()),
    path('customs/<pk>', CustomRetrieveUpdate.as_view()),
    path('todo/', TodoListCreate.as_view()),
    path('todo/<pk>', TodoRetrieveUpdate.as_view()),
]