from django.urls import path


def auth_login(request) -> None:
    return


def auth_logout(request) -> None:
    return


def auth_register(request) -> None:
    return


urlpatterns = [
    path("login/", auth_login),
    path("logout/", auth_logout),
    path("register/", auth_register),
]
