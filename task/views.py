from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Custom
from django.contrib.auth.decorators import login_required


def custom_list(request):
    # me = request.user
    # customs = Custom.objects.filter(author=me).order_by('published_date')
    # customs = Custom.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'task/custom_list.html', {})
