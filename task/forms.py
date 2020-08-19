from django import forms
from .models import Custom


class CustomForm(forms.ModelForm):
    class Meta:
        model = Custom
        fields = ('title', 'start_time', 'end_time')
