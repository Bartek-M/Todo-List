from django.urls import path


def create_list(request) -> None:
    return


def edit_list(request, list_id: int) -> None:
    return


def delete_list(request, list_id: int) -> None:
    return


urlpatterns = [
    path("create/", create_list),
    path("<int:list_id>/edit/", edit_list),
    path("<int:list_id>/delete/", delete_list),
]
