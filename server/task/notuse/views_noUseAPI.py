from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from server.task.models import Custom, Todo
from django.contrib.auth.decorators import login_required
from server.task.forms import CustomForm, TodoForm
from django.views.generic import ListView, DeleteView, DetailView, CreateView, UpdateView
from django.urls import reverse_lazy
from server.task.lib import TimeScheduleBS4
from django.utils.safestring import mark_safe
import datetime
from django.contrib import messages


class CustomListView(ListView):
    model = Custom


def custom_detail(request, pk):
    custom = get_object_or_404(Custom, pk=pk)
    return render(request, 'task/custom_detail.html', {'custom': custom})


class TimeSchedule(CreateView):
    model = Custom
    form_class = CustomForm
    success_url = reverse_lazy('task:custom_add')
    template_name = 'task/custom_add.html'

    def get_context_data(self, *args, **kwargs):
        schedules = Custom.objects.order_by('start_time')
        time_schedule = TimeScheduleBS4(step=10, minute_height=0.5)
        context = super().get_context_data(*args, **kwargs)
        context['time_schedule'] = mark_safe(
            time_schedule.format_schedule(schedules)
        )
        return context

    def form_valid(self, form):
        schedule = form.save(commit=False)
        schedule.start_time = datetime.time(
            int(form.cleaned_data['start_hour']),
            int(form.cleaned_data['start_minute'])
        )
        schedule.end_time = datetime.time(
            int(form.cleaned_data['end_hour']),
            int(form.cleaned_data['end_minute'])
        )
        schedule.author = self.request.user
        schedule.save()
        return redirect('custom_list')


class CustomUpdateView(UpdateView):
    model = Custom
    form_class = CustomForm
    success_url = reverse_lazy('custom_list')
    template_name = "task/custom_edit.html"

    def form_valid(self, form):
        result = super().form_valid(form)
        messages.success(
            self.request, '「{}」を更新しました'.format(self.object)
        )
        return result


class CustomDeleteView(DeleteView):
    model = Custom
    form_class = CustomForm
    success_url = reverse_lazy('custom_list')

    def delete(self, request, *args, **kwargs):
        result = super().delete(self, *args, **kwargs)
        messages.success(
          self.request, '「{}」を削除しました'.format(self.object)
        )
        return result


class TodoListView(ListView):
    model = Todo
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["customs"] = Custom.objects.all()
        return context

class TodoAddView(CreateView):
    model = Todo
    form_class = TodoForm
    template_name = 'task/todo_add.html'
    success_url = reverse_lazy('todo_list')

    def form_valid(self, form):
        todo = form.save(commit=False)
        todo.author = self.request.user
        todo.save()
        result = super().form_valid(form)
        messages.success(
            self.request, '「{}」を作成しました'.format(form.instance)
        )
        return result


class TodoDetailView(DetailView):
    model = Todo


class TodoUpdateView(UpdateView):
    model = Todo
    form_class = TodoForm
    success_url = reverse_lazy('todo_list')
    template_name = "task/todo_edit.html"

    def form_valid(self, form):
        result = super().form_valid(form)
        messages.success(
            self.request, '「{}」を更新しました'.format(self.object)
        )
        return result


class TodoDeleteView(DeleteView):
    model = Todo
    form_class = TodoForm
    success_url = reverse_lazy('todo_list')

    def delete(self, request, *args, **kwargs):
        result = super().delete(request, *args, **kwargs)
        messages.success(
          self.request, '「{}」を削除しました'.format(self.object)
        )
        return result
