from django import forms

from api.models import TodoList, Item


class ListForm(forms.ModelForm):
    class Meta:
        modal = TodoList
        fields = ("name",)


class ItemForm(forms.ModelForm):
    class Meta:
        modal = Item
        fields = ("text", "notes", "deadline_date")
