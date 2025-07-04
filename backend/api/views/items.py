import json
from datetime import timedelta

from django.urls import path
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse
from django.db.models import Q
from django.shortcuts import get_object_or_404
from django.utils import timezone

from api.models import TodoList, Item
from api.forms.lists import ItemForm
from api.decorators import login_required


@login_required
def get_items(request, list_id: int) -> JsonResponse:
    filters = Q(todo_list__author = request.user)
    today = timezone.localdate()

    match list_id:
        case "today":
            filters &= Q(schedule_date__date__lte=today) | Q(deadline_date__date__lte=today)
        case "upcoming":
            next_week = today + timedelta(days=7)
            filters &= (
                Q(schedule_date__date__lte=today) |  # overdue by schedule
                Q(deadline_date__date__lte=today) |  # overdue by deadline
                Q(schedule_date__date__gt=today, schedule_date__date__lte=next_week) |  # upcoming schedule
                Q(deadline_date__date__gt=today, deadline_date__date__lte=next_week)    # upcoming deadline
            )
        case "anytime":
            filters &= Q(schedule_date__isnull=True, deadline_date__isnull=False) | Q(schedule_date__date__lte=today) | Q(deadline_date__date__lte=today)
        case "someday":
            filters &= Q(schedule_date__isnull=True, deadline_date__isnull=True)
        case "logbook":
            filters &= Q(ticked=True)
        case "trash":
            filters &= Q(deleted=True)
        case list_id if not list_id.isdigit():
            return HttpResponse(status=404)
        case _:
            if not TodoList.objects.filter(id=list_id, author=request.user).exists():
                return HttpResponse(status=404)

            filters &= Q(todo_list_id=list_id)

    items = Item.objects.filter(filters)
    return JsonResponse({ "items":  [item.data() for item in items]}, status=200)


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
    path("<str:item_id>/tick/", tick_item),
    path("<str:item_id>/edit/", edit_item),
    path("<str:item_id>/delete/", delete_item),
]
