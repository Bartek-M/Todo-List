from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include(views.auth)),
    path("user/", include(views.user)),
    path("list/", include(views.lists)),
    path("list/<int:list_id>/items/", include(views.items))
]
