from rest_framework import generics
from users.models import User
from .serializers import UserSerializer

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
