from rest_framework import generics
from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer

class JobListView(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class ApplicationCreateView(generics.CreateAPIView):
    serializer_class = ApplicationSerializer
