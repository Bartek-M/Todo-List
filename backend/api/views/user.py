from django.urls import path


def get_me(request) -> None:
    return


def edit_user(request) -> None:
    return


def change_password(request) -> None:
    return


def delete_user(request) -> None:
    return


urlpatterns = [
    path("me/", get_me),
    path("edit/", edit_user),
    path("password/", change_password),
    path("delete/", delete_user),
]
