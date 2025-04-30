from .serializer import UserSerializer
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]
    
class ProtectedView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)