from django.urls import path
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponse


@login_required
def get_me(request) -> None:
    return JsonResponse(request.user.data(), status=200)


def edit_user(request) -> None:
    return


def change_password(request) -> None:
    return


def delete_user(request) -> None:
    return


urlpatterns = [
    path("me/", get_me),
    path("edit/", edit_user),
    path("password/", change_password),
    path("delete/", delete_user),
]
