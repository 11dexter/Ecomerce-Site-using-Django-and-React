from django.shortcuts import render
from .serializers import ProductSerializer
from .models import Product_Detail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['GET'])
def product_list(request):

    products = Product_Detail.objects.all()
    Product_Serializerobj = ProductSerializer(products, many=True)
    return Response(Product_Serializerobj.data,status=status.HTTP_200_OK)


@api_view(['GET'])
def product_by_id(request,product_id):

    try:
        productobj = Product_Detail.objects.get(product_id=product_id)
        Product_Serializerobj = ProductSerializer(productobj,many=False)
        return Response(Product_Serializerobj.data, status=status.HTTP_200_OK)
    except Product_Detail.DoesNotExist:
        return Response({'message': "Book not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["DELETE"])
def product_delete_by_id(request, product_id):

    try:
        productobj = Product_Detail.objects.get(product_id=product_id)
        productobj.delete()
        return Response({'message': "Product deleted successfully"}, status=status.HTTP_200_OK)
    except Product_Detail.DoesNotExist:
        return Response({'message': "Product not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
def product_create(request):

    Product_Serializerobj = ProductSerializer(data=request.data)
    if Product_Serializerobj.is_valid():
        Product_Serializerobj.save()
        return Response(Product_Serializerobj.data, status=status.HTTP_201_CREATED)
    else:
        return Response(Product_Serializerobj.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
def product_update_by_id(request, product_id):

    try:
        productobj = Product_Detail.objects.get(product_id=product_id)
        Product_Serializerobj = ProductSerializer(productobj, data=request.data, partial=True)
        if Product_Serializerobj.is_valid():
            Product_Serializerobj.save()
            return Response(Product_Serializerobj.data, status=status.HTTP_200_OK)
        return Response(Product_Serializerobj.errors, status=status.HTTP_400_BAD_REQUEST)
    except Product_Detail.DoesNotExist:
        return Response({'message': "Product not found"}, status=status.HTTP_404_NOT_FOUND)


