# Generated by Django 3.0.3 on 2020-10-10 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0006_auto_20200907_1807'),
    ]

    operations = [
        migrations.AddField(
            model_name='custom',
            name='repeat_flag',
            field=models.IntegerField(default=1111111),
            preserve_default=False,
        ),
    ]