from django.contrib import admin

from api.models import User, TodoList, Item

admin.site.register(User)
admin.site.register(TodoList)
admin.site.register(Item)