from django.db import models
from django.conf import settings
from django.utils import timezone
import datetime


class Custom(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    start_time = models.TimeField('開始時間', dafault=datetime.time(0, 0, 0))
    end_time = models.TimeField('終了時間', dafault=datetime.time(0, 0, 0))

    def __str__(self):
        return self.title
