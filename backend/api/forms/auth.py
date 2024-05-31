from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate
from django.core.exceptions import ValidationError
from django import forms

from api.models import User


class RegisterForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ("username", "email", "password")

    def clean(self) -> dict:
        cleaned_data = super().clean()

        cleaned_data["username"] = cleaned_data.get("username", "").lower()
        cleaned_data["email"] = cleaned_data.get("email", "").lower()

        try:
            validate_password(cleaned_data.get("password"))
        except ValidationError as e:
            self.add_error("password", e)

        return cleaned_data


class LoginForm(forms.Form):
    login_data = forms.CharField()
    password = forms.CharField()

    def clean(self) -> dict:
        cleaned_data = super().clean()

        login_data = cleaned_data.get("login_data")
        password = cleaned_data.get("password")

        try:
            email_user = User.objects.get(email=login_data)

            if email_user and email_user.check_password(password):
                user = email_user
        except User.DoesNotExist:
            user = authenticate(
                username=login_data,
                password=password,
            )

        if not user:
            raise ValidationError("Login or password is invalid")

        cleaned_data["user"] = user
        return cleaned_data