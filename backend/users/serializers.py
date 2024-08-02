from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer # type: ignore


User = get_user_model()


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password']


# PRODUCTS

from rest_framework import serializers
from .models import Products

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'