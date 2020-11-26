from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .models import Custom, Todo
from .serializers import UserSerializer, TodoSerializer, CustomSerializer
import datetime

class UserList(generics.ListAPIView):
    """View to list all users"""
    queryset = User.objects.all().order_by('first_name')
    serializer_class = UserSerializer
    permission_classed = (permissions.IsAuthenticated, )


class UserCreate(generics.CreateAPIView):
    """View to create a new user. Only accepts POST requests """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAdminUser, )


class UserRetrieveUpdate(generics.RetrieveUpdateAPIView):
    """Retrieve a user or update user information.
    Accepts GET and PUT requests and the record id must be provided in the request """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, )


class CustomListCreate(generics.ListCreateAPIView):
    """List and create PileColors """
    queryset = Custom.objects.all()
    serializer_class = CustomSerializer
    permission_classes = (permissions.IsAuthenticated, )


class CustomRetrieveUpdate(generics.RetrieveUpdateAPIView):
    """Retrieve and update Custom information"""
    queryset = Custom.objects.all()
    serializer_class = CustomSerializer
    permission_classes = (permissions.IsAuthenticated, )


class TodoListCreate(generics.ListCreateAPIView):
    """List and create Todo"""
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def get_queryset(self):

        user = self.request.user
        return Todo.objects.filter(author=user, start_time__lte=datetime.datetime.now(), end_time__gte=datetime.datetime.now())


class TodoRetrieveUpdate(generics.RetrieveUpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = (permissions.IsAuthenticated, )