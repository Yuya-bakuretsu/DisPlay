from django.contrib.auth.models import User
from .models import Custom, Todo
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """A serializer class gor the User model"""
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'password', 'is_active', 'is_superuser')


class TodoSerializer(serializers.ModelSerializer):
    """A serializer for the Todo model"""
    class Meta:
        model = Todo
        fields = ('id', 'author', 'title', 'start_time', 'end_time')


class CustomSerializer(serializers.ModelSerializer):
    """A serializer for the Custom model"""
    class Meta:
        model = Custom
        fields = ('id', 'author', 'title', 'start_time', 'end_time', 'deadline_time')
