from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Custom
from django.contrib.auth.decorators import login_required
from .forms import CustomForm
from django.views import generic
from django.urls import reverse_lazy


def custom_list(request):
    me = request.user
    customs = Custom.objects.filter(author=me).order_by('start_time')
    return render(request, 'task/custom_list.html', {'customs': customs})


def custom_detail(request, pk):
    custom = get_object_or_404(Custom, pk=pk)
    return render(request, 'task/custom_detail.html', {'custom': custom})


def custom_add(request):
    if request.method == "POST":
        form = CustomForm(request.POST)
        if form.is_valid():
            custom = form.save(commit=False)
            custom.author = request.user
            custom.save()
            return redirect('custom_detail', pk=custom.pk)
    else:
        form = CustomForm()
    return render(request, 'task/custom_edit.html', {'form': form})


class TimeSchedule(generic.CreateView):
    model = Custom
    form_class = CustomForm
    success_url = reverse_lazy()