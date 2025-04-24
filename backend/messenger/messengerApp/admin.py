from django.contrib import admin
from .models import Attachment, Reaction, User, Message, MessageStatus, Chat

# Register your models here.

admin.site.register(Attachment)
admin.site.register(Reaction)
admin.site.register(User)
admin.site.register(Message)
admin.site.register(MessageStatus)
admin.site.register(Chat)