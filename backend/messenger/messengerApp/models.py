from django.db import models
from django.contrib.auth.models import AbstractUser, Permission

# Create your models here.
class User(AbstractUser):
    phone_number = models.CharField(max_length=15, unique=True)

    def __str__(self):
        return f"{self.username}, {self.phone_number}"
    
class Chat(models.Model):
    chat_name = models.CharField(max_length=20)
    users = models.ManyToManyField(User)
    created_at = models.DateTimeField(auto_now= True)

    def __str__(self):
        return f"{self.chat_name}, {self.users}"

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField( auto_now=True)
    content = models.CharField(max_length=500)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.content}, {self.user}, {self.chat} "
    
class Attachment(models.Model):
    message = models.ForeignKey(Message, on_delete=models.CASCADE)
    file = models.FileField(upload_to='attachment/')
    upload_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.file.name}, {self.message}"
    
class MessageStatus(models.Model):
    read_it = models.BooleanField(default=False)
    read_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.ForeignKey(Message, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.read_it}, {self.read_at}, {self.user}, {self.message}"
    
class Reaction(models.Model):
    emoji = models.CharField(max_length=10)
    message = models.ForeignKey(Message, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.emoji}, {self.message}, {self.user}"