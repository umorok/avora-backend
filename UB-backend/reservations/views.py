from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Reservation
from .serializers import ReservationSerializer

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow admins to edit reservations.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_staff

class ReservationListCreateView(generics.ListCreateAPIView):
    """
    View for listing and creating reservations.
    """
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.AllowAny()]  # Allow anyone to create reservation
        return super().get_permissions()
    
    def perform_create(self, serializer):
        serializer.save()

# class ReservationDetailView(generics.RetrieveUpdateDestroyAPIView):
#     """
#     View for retrieving, updating and deleting a reservation.
#     """
#     queryset = Reservation.objects.all()
#     serializer_class = ReservationSerializer
#     permission_classes = [IsAdminOrReadOnly]
    
#     def get_permissions(self):
#         if self.request.method == 'DELETE':
#             return [permissions.IsAdminUser()]
#         return super().get_permissions()
    
#     def update(self, request, *args, **kwargs):
#         # Get the old instance to compare status changes
#         instance = self.get_object()
#         old_status = instance.status
        
#         # Perform update
#         partial = kwargs.pop('partial', False)
#         serializer = self.get_serializer(instance, data=request.data, partial=partial)
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)
        
#         # Check if status changed
#         new_status = serializer.instance.status
#         if old_status != new_status:
#             # The signal will handle email sending
#             pass
        
#         return Response(serializer.data)

# @api_view(['GET'])
# @permission_classes([permissions.AllowAny])
# def check_availability(request):
#     """
#     Check availability for a specific date and time.
#     """
#     from datetime import datetime
    
#     date = request.query_params.get('date')
#     start_time = request.query_params.get('start_time')
#     end_time = request.query_params.get('end_time')
    
#     if not all([date, start_time, end_time]):
#         return Response(
#             {'error': 'Please provide date, start_time, and end_time parameters.'},
#             status=status.HTTP_400_BAD_REQUEST
#         )
    
#     try:
#         date_obj = datetime.strptime(date, '%Y-%m-%d').date()
#         start_time_obj = datetime.strptime(start_time, '%H:%M').time()
#         end_time_obj = datetime.strptime(end_time, '%H:%M').time()
#     except ValueError:
#         return Response(
#             {'error': 'Invalid date or time format. Use YYYY-MM-DD for date and HH:MM for time.'},
#             status=status.HTTP_400_BAD_REQUEST
#         )
    
#     # Check for overlapping reservations
#     overlapping_reservations = Reservation.objects.filter(
#         date=date_obj,
#         status__in=['pending', 'accepted']
#     ).exclude(
#         start_time__gte=end_time_obj
#     ).exclude(
#         end_time__lte=start_time_obj
#     )
    
#     is_available = not overlapping_reservations.exists()
    
#     return Response({
#         'date': date,
#         'start_time': start_time,
#         'end_time': end_time,
#         'is_available': is_available,
#         'conflicting_reservations': overlapping_reservations.count() if not is_available else 0
#     })