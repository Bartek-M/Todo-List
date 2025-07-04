from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

from . import views


urlpatterns = [
    path("hello/", lambda _: JsonResponse({"hello": "World!"}, status=200)),
    path("admin/", admin.site.urls),
    path("auth/", include(views.auth)),
    path("user/", include(views.user)),
    path("list/", include(views.lists)),
    path("list/<str:list_id>/items/", include(views.items))
]
