from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReservationListCreateView.as_view(), name='reservation-list-create'),
    # path('<int:pk>/', views.ReservationDetailView.as_view(), name='reservation-detail'),
    # path('availability/', views.check_availability, name='check-availability'),
]