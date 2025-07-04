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

    def data(self) -> dict:
        return {
            "id": str(self.id),
            "username": self.username,
            "email": self.email,
            "avatar": self.avatar,
            "lists": [lst.data() for lst in self.todolist_set.all()],
        }

    def __str__(self) -> str:
        return f"{self.id}| {self.username}: {self.email} - {len(self.todolist_set.all())} lists"


class TodoList(models.Model):
    name = models.CharField(max_length=50)
    author = models.ForeignKey("User", on_delete=models.CASCADE)
    create_date = models.DateTimeField(default=timezone.now)
    index = models.IntegerField(default=0)
    type = models.PositiveSmallIntegerField(
        choices=[
            (0, "default"),
            (1, "list"),
            (2, "project")
        ],
        default=1
    )

    def data(self) -> dict:
        return {
            "id": str(self.id),
            "name": self.name,
            "type": self.type,
            "index": self.index,
            "create_date": self.create_date,
        }

    def __str__(self) -> str:
        return f"{self.id}| {self.name} by {self.author.username}({self.author.id}) - {len(self.item_set.all())} items"


class Item(models.Model):
    text = models.TextField(max_length=500)
    notes = models.TextField(max_length=500, blank=True, null=True)
    todo_list = models.ForeignKey("TodoList", on_delete=models.CASCADE)
    ticked = models.BooleanField(default=False)
    index = models.IntegerField(default=0)
    schedule_date = models.DateTimeField(blank=True, null=True)
    deadline_date = models.DateTimeField(blank=True, null=True)
    create_date = models.DateTimeField(default=timezone.now)
    deleted = models.BooleanField(default=False)

    def data(self) -> dict:
        return {
            "id": str(self.id),
            "text": self.text,
            "notes": self.notes,
            "ticked": self.ticked,
            "index": self.index,
            "todo_list": self.todo_list.id,
            "schedule_date": self.schedule_date,
            "deadline_date": self.deadline_date,
            "create_date": self.create_date,
            "deleted": self.deleted
        }

    def __str__(self) -> str:
        return f"{self.id}| {self.todo_list.author.username}({self.todo_list.author.id}) on {self.todo_list.name}: {self.text}"


class File(models.Model):
    file = models.BinaryField()
