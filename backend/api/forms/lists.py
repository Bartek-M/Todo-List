from django import forms

from api.models import Item


class ListForm(forms.ModelForm):
    class Meta:
        modal = Item
        fields = ("name",)


class ItemForm(forms.ModelForm):
    class Meta:
        modal = Item
        fields = ("text", "notes", "deadline_date")
