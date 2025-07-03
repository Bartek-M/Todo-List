import json

from django.urls import path
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404

from api.models import TodoList, Item
from api.forms.lists import ItemForm
from api.decorators import login_required


@login_required
def get_items(request, list_id: int) -> JsonResponse:
    todo_list = get_object_or_404(TodoList, id=list_id, author=request.user)
    return JsonResponse({ "items": todo_list.get_items()} , status=200)


@login_required
@require_http_methods(["POST"])
def add_item(request, list_id: int) -> JsonResponse:
    todo_list = get_object_or_404(TodoList, id=list_id, author=request.user)
    form = ItemForm(json.loads(request.body))

    if not form.is_valid():
        return JsonResponse({"errors": json.loads(form.errors.as_json())}, status=400)

    item = form.save(commit=False)
    item.todo_list = todo_list
    item.save()

    return JsonResponse(item.data(), status=200)


@login_required
@require_http_methods(["PATCH"])
def tick_item(request, list_id: int, item_id: int) -> HttpResponse:
    todo_list = get_object_or_404(TodoList, id=list_id, author=request.user)
    item = get_object_or_404(Item, id=item_id, todo_list=todo_list)

    item.ticked = not item.ticked
    item.save()

    return HttpResponse(status=200)


@login_required
@require_http_methods(["PATCH"])
def edit_item(request, list_id: int, item_id: int):
    return


@login_required
@require_http_methods(["DELETE"])
def delete_item(request, list_id: int, item_id: int) -> HttpResponse:
    todo_list = get_object_or_404(TodoList, id=list_id, author=request.user)
    item = get_object_or_404(Item, id=item_id, todo_list=todo_list)

    item.delete()
    return HttpResponse(status=200)


urlpatterns = [
    path("", get_items),
    path("add/", add_item),
    path("<int:item_id>/tick/", tick_item),
    path("<int:item_id>/edit/", edit_item),
    path("<int:item_id>/delete/", delete_item),
]
