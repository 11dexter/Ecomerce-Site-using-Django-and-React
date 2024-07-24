from django.db import models

# Create your models here.
class User_Details(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)

    def __str__(self):
        return self.username



class Product_Detail(models.Model):
    product_name = models.CharField(max_length=255)
    price = models.IntegerField()
    product_description = models.CharField(max_length=255)
    product_image = models.ImageField(upload_to='images/', null=True)
    category = models.CharField(max_length=255)

    def __str__(self):
        return self.product_name

