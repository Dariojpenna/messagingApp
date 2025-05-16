from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import  IsAuthenticated, AllowAny
from rest_framework import status
from .models import Chat, Message, MessageStatus, Reaction, Attachment, User
from .serializer import UserSerializer, MessageSerializer, MessageStatusSerializer, ChatSerializer, ReactionSerializer
from rest_framework.authentication import SessionAuthentication
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.http import require_GET
# Create your views here.

@require_GET
@ensure_csrf_cookie
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


class IndexView(APIView):  # General View all chats and group
    def get(self, request):
        return Response(status.HTTP_200_ok)


class LoginView(APIView): # Login view
    def post( self, request):
        return Response(status.HTTP_200_ok)
    
class RegisterView(APIView): # Register View
    authentication_classes = [SessionAuthentication] 
    permission_classes = [AllowAny]
    
    def post( self, request):
        
        new_user = User.objects.create_user(
            username=request.data['username'],
            password=request.data['password'],
            email=request.data['email'],
            phone_number=request.data['country_code']+request.data['phone_number']
        )
        return Response(status.HTTP_200_OK)
    
class ChatView(APIView): # Groupal and individual chats
    def get( self, request):
        return Response(status.HTTP_200_ok)