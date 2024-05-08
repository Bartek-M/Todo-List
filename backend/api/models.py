from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(max_length=254, blank=False, unique=True)
    avatar = models.IntegerField(null=True)
    theme = models.PositiveSmallIntegerField(
        choices=[
            (0, "auto"),
            (1, "dark"),
            (2, "light"),
        ],
        default=0,
    )
    lists = models.ManyToManyField("TodoList")

    def data(self) -> dict:
        return {
            "username": self.username,
            "email": self.email,
            "avatar": self.avatar,
            "lists": [lst.data() for lst in self.lists.all()],
        }

    def __repr__(self) -> str:
        return f"[{self.username}] {self.email} - {len(self.lists.all())} lists"


class TodoList(models.Model):
    name = models.CharField(max_length=50)
    author = models.ForeignKey("User", on_delete=models.CASCADE)
    items = models.ManyToManyField("Item")
    create_date = models.DateTimeField(default=timezone.now)

    def data(self) -> dict:
        return {
            "name": self.name,
            "create_date": self.create_date,
        }

    def get_items(self) -> list:
        return [item.data() for item in self.items.all()]

    def __repr__(self) -> str:
        return f"[{self.name}] by {self.author} - {len(self.items.all())} items"


class Item(models.Model):
    text = models.TextField(max_length=500)
    notes = models.TextField(max_length=500, blank=True, null=True)
    todo_list = models.ForeignKey("TodoList", on_delete=models.CASCADE)
    ticked = models.BooleanField(default=False)
    deadline_date = models.DateTimeField(blank=True, null=True)
    create_date = models.DateTimeField(default=timezone.now)

    def data(self) -> dict:
        return {
            "text": self.text,
            "notes": self.notes,
            "ticked": self.ticked,
            "deadline_date": self.deadline_date,
            "create_date": self.create_date,
        }

    def __repr__(self) -> str:
        return f"[{self.id}] from {self.todo_list.name}: {self.text}"


class File(models.Model):
    file = models.BinaryField()
