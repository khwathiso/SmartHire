from django.urls import path
from .views import JobListView, ApplicationCreateView

urlpatterns = [
    path('', JobListView.as_view(), name='jobs'),
    path('apply/', ApplicationCreateView.as_view(), name='apply'),
]
