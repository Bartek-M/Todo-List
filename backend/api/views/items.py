from django.urls import path


def get_items(request, list_id: int) -> None:
    return


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
