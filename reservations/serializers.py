from rest_framework import serializers
from .models import Reservation
from datetime import date, time

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = [
            'id', 'name', 'email', 'phone', 'date', 
            'start_time', 'end_time', 'number_of_guests',
            'special_requests', 'status', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate(self, data):
        # Check that end_time is after start_time
        if 'start_time' in data and 'end_time' in data:
            if data['end_time'] <= data['start_time']:
                raise serializers.ValidationError(
                    {'end_time': 'End time must be after start time.'}
                )
        
        # Check date is not in the past
        if 'date' in data and data['date'] < date.today():
            raise serializers.ValidationError(
                {'date': 'Date cannot be in the past.'}
            )
        
        # Check number_of_guests is reasonable
        if 'number_of_guests' in data and data['number_of_guests'] > 100:
            raise serializers.ValidationError(
                {'number_of_guests': 'Number of guests cannot exceed 100.'}
            )
        
        return data
    
    def validate_phone(self, value):
        # Basic phone validation (can be enhanced)
        if not value.replace(' ', '').replace('-', '').replace('+', '').isdigit():
            raise serializers.ValidationError('Phone number must contain only digits and valid separators.')
        return value