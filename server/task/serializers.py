from django.contrib.auth.models import User
from .models import Custom, Todo
from rest_framework import serializers
import json
from pytz import timezone as tz
from django.utils import timezone
import datetime
from django.core.serializers.json import DjangoJSONEncoder


class UserSerializer(serializers.ModelSerializer):
    """A serializer class gor the User model"""
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'password', 'is_active', 'is_superuser')


class TodoSerializer(serializers.ModelSerializer):
    """A serializer for the Todo model"""
    d_date = serializers.SerializerMethodField()
    d_time = serializers.SerializerMethodField()
    deadline_time = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S %Z")

    class Meta:
        model = Todo
        fields = ('id', 'author', 'title', 'start_time', 'end_time', 'deadline_time', 'd_date', 'd_time')


    def get_d_date(self, obj):
        return obj.deadline_time.astimezone(tz('Asia/Tokyo')).strftime("%Y-%m-%d")

    def get_d_time(self, obj):
        return obj.deadline_time.astimezone(tz('Asia/Tokyo')).strftime("%H:%M:%S")



class CustomSerializer(serializers.ModelSerializer):
    """A serializer for the Custom model"""
    class Meta:
        model = Custom
        fields = ('id', 'author', 'title', 'start_time', 'end_time', 'repeat_flag')
