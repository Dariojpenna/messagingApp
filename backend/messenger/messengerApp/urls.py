from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenBlacklistView
from .views import RegisterView, IndexView, ChatView, get_csrf_token

urlpatterns = [
    path('token/',TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/logout/', TokenBlacklistView.as_view(), name='logout'),
    path('register/', RegisterView.as_view(), name='register'),
    path('index/', IndexView.as_view(), name='index'),
    path('chat<int:id>',ChatView.as_view(), name='chat'),
    path('csrf/', get_csrf_token, name='csrf'),
]