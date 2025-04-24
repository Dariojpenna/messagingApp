from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenBlacklistView

urlpatterns = [
    path('messenger/token/',TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('messenger/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('messenger/token/logout', TokenBlacklistView.as_view, name='logout'),
    
]