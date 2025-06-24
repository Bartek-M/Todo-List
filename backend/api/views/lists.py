import json

from django.urls import path
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404

from api.models import TodoList, Item
from api.forms.lists import ListForm
from api.decorators import login_required


@login_required
@require_http_methods(["POST"])
def create_list(request) -> JsonResponse:
    form = ListForm(request.body)

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    todo_list = form.save(commit=False)
    todo_list.author = request.user
    todo_list.save()

    return JsonResponse(todo_list.date(), status=200)


@login_required
@require_http_methods(["PATCH"])
def edit_list(request, list_id: int) -> None:
    return


@login_required
@require_http_methods(["DELETE"])
def delete_completed(request, list_id: int) -> HttpResponse:
    todo_list = get_object_or_404(TodoList, id=list_id, author=request.user)
    Item.objects.filter(todo_list=todo_list, ticked=True).delete()

    return HttpResponse(status=200)


@login_required
@require_http_methods(["DELETE"])
def delete_list(request, list_id: int) -> HttpResponse:
    todo_list = get_object_or_404(TodoList, id=list_id, author=request.user)
    todo_list.delete()

    return HttpResponse(status=200)


urlpatterns = [
    path("create/", create_list),
    path("<int:list_id>/edit/", edit_list),
    path("<int:list_id>/delete/", delete_list),
]
