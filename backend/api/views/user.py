from django.urls import path
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404


@login_required
def get_me(request) -> None:
    return JsonResponse(request.user.data(), status=200)


@login_required
@require_http_methods(["PATCH"])
def change_theme(request) -> None:
    return


@login_required
@require_http_methods(["PATCH"])
def change_password(request) -> None:
    return


@login_required
@require_http_methods(["DELETE"])
def delete_user(request) -> None:
    return


urlpatterns = [
    path("me/", get_me),
    path("theme/", change_theme),
    path("password/", change_password),
    path("delete/", delete_user),
]
