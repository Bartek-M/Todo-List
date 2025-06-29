from django import forms

from api.models import TodoList, Item


class ListForm(forms.ModelForm):
    class Meta:
        model = TodoList
        fields = ("name",)


class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ("text", "notes", "deadline_date")
