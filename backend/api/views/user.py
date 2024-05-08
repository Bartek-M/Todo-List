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
def change_theme(request) -> JsonResponse:
    theme = request.body.get("theme")

    if theme is None or theme not in [0, 1, 2]:
        return JsonResponse(
            {"errors": {"theme": "Incorrect theme value - must be an int [0, 1, 2]"}},
            status=400,
        )

    request.user.theme = theme
    request.user.save()

    return JsonResponse({"theme": theme}, status=200)


@login_required
@require_http_methods(["PATCH"])
def change_avatar(request) -> None:
    return


@login_required
@require_http_methods(["PATCH"])
def change_username(request) -> None:
    return


@login_required
@require_http_methods(["PATCH"])
def change_password(request) -> None:
    return


@login_required
@require_http_methods(["DELETE"])
def delete_user(request) -> HttpResponse:
    request.user.delete()
    return HttpResponse(status=200)


urlpatterns = [
    path("me/", get_me),
    path("theme/", change_theme),
    path("password/", change_password),
    path("delete/", delete_user),
]
