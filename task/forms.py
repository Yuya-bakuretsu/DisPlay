from django import forms
from .models import Custom
import datetime

HOURS = [(x, x) for x in range(0, 24)]
MINUTES = [(x, x) for x in range(0, 60)]


class CustomForm(forms.ModelForm):
    start_hour = forms.ChoiceField(label='開始:時間', choices=HOURS, )
    start_minute = forms.ChoiceField(label='開始:分', choices=MINUTES, )
    end_hour = forms.ChoiceField(label='終了:時間', choices=HOURS, )
    end_minute = forms.ChoiceField(label='終了:分', choices=MINUTES, )

    class Meta:
        model = Custom
        fields = ('title',)
        widgets = {
            'title': forms.Textarea(attrs={
                'class': 'form-control',
            }),
        }

    def clean_end_minute(self):
        start_time = datetime.time(
            hour=int(self.cleaned_data['start_hour']),
            minute=int(self.cleaned_data['start_minute'])
        )
        end_time = datetime.time(
            hour=int(self.cleaned_data['end_hour']),
            minute=int(self.cleaned_data['end_minute'])
        )
        if end_time <= start_time:
            raise forms.ValidationError(
                '終了時間は、開始時間よりも後にしてください'
            )
        return self.cleaned_data['end_minute']
