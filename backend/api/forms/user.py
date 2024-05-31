from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django import forms


class UsernameForm(forms.Form):
    username = forms.CharField()

    def __init__(self, user, *args, **kwargs):
        self.user = user
        super().__init__(*args, **kwargs)

    def clean(self):
        cleaned_data = super().clean()

        if not self.user.check_password(cleaned_data.get("old_password")):
            self.add_error("old_password", "Passwords is invalid")

        if cleaned_data.get("new_password1") != cleaned_data.get("new_password2"):
            self.add_error("new_password2", "Passwords doesn't match")

        try:
            validate_password(cleaned_data.get("new_password1"))
        except ValidationError as e:
            self.add_error("new_password1", e)

        return cleaned_data

    def save(self):
        self.user.set_password(self.cleaned_data["new_password1"])
        self.user.save()

        return self.user


class PasswordForm(forms.Form):
    old_password = forms.CharField(max_length=128)
    new_password1 = forms.CharField(max_length=128)
    new_password2 = forms.CharField(max_length=128)

    def __init__(self, user, *args, **kwargs):
        self.user = user
        super().__init__(*args, **kwargs)

    def clean(self):
        cleaned_data = super().clean()

        if not self.user.check_password(cleaned_data.get("old_password")):
            self.add_error("old_password", "Passwords is invalid")

        if cleaned_data.get("new_password1") != cleaned_data.get("new_password2"):
            self.add_error("new_password2", "Passwords doesn't match")

        try:
            validate_password(cleaned_data.get("new_password1"))
        except ValidationError as e:
            self.add_error("new_password1", e)

        return cleaned_data

    def save(self):
        self.user.set_password(self.cleaned_data["new_password1"])
        self.user.save()

        return self.user
