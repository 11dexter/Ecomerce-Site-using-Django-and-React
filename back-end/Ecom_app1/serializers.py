from rest_framework import serializers
from .models import Product_Detail,User_Details


# serializers for product details
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_Detail
        fields = '__all__'

# serializers for user details
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Details
        fields = '__all__'
