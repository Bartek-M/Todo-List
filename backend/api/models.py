from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(max_length=254, blank=False, unique=True)
    avatar = models.ForeignKey("File", on_delete=models.SET_NULL, null=True)
    lists = models.ManyToManyField("TodoList")

    def __repr__(self) -> str:
        return f"[{self.username}] {self.email} - {len(self.lists.all())} lists"


class TodoList(models.Model):
    name = models.CharField(max_length=50)
    author = models.ForeignKey("User", on_delete=models.CASCADE)
    items = models.ManyToManyField("Item")
    create_date = models.DateTimeField(default=timezone.now)

    def __repr__(self) -> str:
        return f"[{self.name}] by {self.author} - {len(self.items.all())} items"


class Item(models.Model):
    text = models.TextField(max_length=500)
    todo_list = models.ForeignKey("TodoList", on_delete=models.CASCADE)
    deadline_date = models.DateTimeField(blank=True)
    create_date = models.DateTimeField(default=timezone.now)

    def __repr__(self) -> str:
        return f"[{self.id}] from {self.todo_list.name}: {self.text}"


class File(models.Model):
    file = models.BinaryField()
