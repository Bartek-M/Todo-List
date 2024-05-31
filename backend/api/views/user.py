import json

from django.urls import path
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404

from api.models import File
from api.forms.user import UsernameForm, PasswordForm
from api.utils import crop_image


@login_required
def get_me(request) -> JsonResponse:
    return JsonResponse(request.user.data(), status=200)


@login_required
def get_avatar(request) -> JsonResponse:
    file = get_object_or_404(File, id=request.user.avatar)

    resp = HttpResponse(file.file, content_type=".webp")
    resp["Content-Disposition"] = f"attachment; filename=avatar"
    return resp


@login_required
@require_http_methods(["POST"])
def change_avatar(request) -> JsonResponse:
    if not (file := request.FILES.get("icon")):
        return HttpResponse(status=400)

    if not (img := crop_image(file)):
        return JsonResponse({"errors": {"image": ("Invalid image format")}}, status=400)

    try:
        File.objects.get(id=request.user.avatar).delete()
    except File.DoesNotExist:
        pass

    file = File(file=img)
    file.save()

    request.user.avatar = file.id
    request.user.save()

    return JsonResponse({"id": file.id}, status=200)


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
def change_username(request) -> None:
    form = UsernameForm(request.user, data=json.loads(request.body))

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    form.save()
    return HttpResponse(status=200)


@login_required
@require_http_methods(["PATCH"])
def change_password(request) -> None:
    form = PasswordForm(request.user, data=json.loads(request.body))

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    user = form.save()
    update_session_auth_hash(request, user)
    return HttpResponse(status=200)


@login_required
@require_http_methods(["DELETE"])
def delete_user(request) -> HttpResponse:
    request.user.delete()
    return HttpResponse(status=200)


urlpatterns = [
    path("me/", get_me),
    path("avatar/", get_avatar),
    path("set-avatar/", change_avatar),
    path("theme/", change_theme),
    path("password/", change_password),
    path("delete/", delete_user),
]
