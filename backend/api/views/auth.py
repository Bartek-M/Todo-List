import json

from django.urls import path
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login, logout

from api.forms.auth import LoginForm, RegisterForm


@require_http_methods(["POST"])
def auth_login(request) -> None:
    form = LoginForm(json.loads(request.body))

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    user = form.cleaned_data.get("user")
    login(request, user)

    return HttpResponse(status=200)


@login_required 
def auth_logout(request) -> None:
    logout(request)
    return HttpResponse(status=200)


@require_http_methods(["POST"])
def auth_register(request) -> None:
    form = RegisterForm(json.loads(request.body))

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    user = form.save()
    login(request, user)

    return HttpResponse(status=200)


urlpatterns = [
    path("login/", auth_login),
    path("logout/", auth_logout),
    path("register/", auth_register),
]
