# Generated by Django 3.0.3 on 2020-09-07 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0005_auto_20200907_1806'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='end_time',
            field=models.TimeField(blank=True, null=True, verbose_name='終了時間'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='start_time',
            field=models.TimeField(blank=True, null=True, verbose_name='開始時間'),
        ),
    ]
