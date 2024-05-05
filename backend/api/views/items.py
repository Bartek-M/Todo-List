from django.urls import path
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponse

from api.models import TodoList


@login_required
def get_items(request, list_id: int) -> None:
    try:
        lst = request.user.lists.get(id=list_id)
    except TodoList.DoesNotExist:
        return HttpResponse(status=404)

    return JsonResponse(lst.get_items(), status=200)


def add_item(request, list_id: int) -> None:
    return


def tick_item(request, list_id: int, item_id: int) -> None:
    return


def edit_item(request, list_id: int, item_id: int) -> None:
    return


def delete_item(request, list_id: int, item_id: int) -> None:
    return


urlpatterns = [
    path("", get_items),
    path("add/", add_item),
    path("<int:item_id>/tick/", tick_item),
    path("<int:item_id>/edit/", edit_item),
    path("<int:item_id>/delete/", delete_item),
]
