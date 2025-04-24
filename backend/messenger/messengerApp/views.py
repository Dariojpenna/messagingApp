from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import  IsAuthenticated, AllowAny
from rest_framework import status
from .models import Chat, Message, MessageStatus, Reaction, Attachment, User
from .serializer import UserSerializer, MessageSerializer, MessageStatusSerializer, ChatSerializer, ReactionSerializer
# Create your views here.


class IndexView(APIView):  # General View all chats and group
    def get(self, request):
        return Response(status.HTTP_200_ok)

class LoginView(APIView): # Login view
    def post( self, request):
        return Response(status.HTTP_200_ok)
    
class RegisterView(APIView): # Register View
    def post( self, request):
        return Response(status.HTTP_200_OK)
    
class ChatView(APIView): # Groupal and individual chats
    def get( self, request):
        return Response(status.HTTP_200_ok)