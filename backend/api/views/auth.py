import json

from django.urls import path
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login, logout

from api.forms.auth import LoginForm, RegisterForm


@require_http_methods(["POST"])
def auth_login(request):
    form = LoginForm(json.loads(request.body))

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    user = form.cleaned_data.get("user")
    login(request, user)

    return HttpResponse(status=200)


def auth_logout(request):
    logout(request)
    return HttpResponse(status=200)


@require_http_methods(["POST"])
def auth_register(request):
    form = RegisterForm(json.loads(request.body))

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    form.save()
    return HttpResponse(status=200)


@ensure_csrf_cookie
def get_csrf(_):
    return JsonResponse({"message": "CSRF cookie set"}, status=200)


urlpatterns = [
    path("login/", auth_login),
    path("logout/", auth_logout),
    path("register/", auth_register),
    path("csrf/", get_csrf)
]
