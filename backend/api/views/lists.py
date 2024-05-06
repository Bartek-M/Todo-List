from django.urls import path
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required


@login_required
@require_http_methods(["POST"])
def create_list(request) -> None:
    return


@login_required
@require_http_methods(["PATCH"])
def edit_list(request, list_id: int) -> None:
    return


@login_required
@require_http_methods(["DELETE"])
def delete_list(request, list_id: int) -> None:
    return


urlpatterns = [
    path("create/", create_list),
    path("<int:list_id>/edit/", edit_list),
    path("<int:list_id>/delete/", delete_list),
]
