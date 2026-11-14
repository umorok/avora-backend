from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Reservation(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    number_of_guests = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(100)]
    )
    special_requests = models.TextField(blank=True, null=True)
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='pending'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'
    
    def __str__(self):
        return f"{self.name} - {self.date} {self.start_time}"
    
    @property
    def duration(self):
        """Calculate duration in hours"""
        from datetime import datetime
        start = datetime.combine(self.date, self.start_time)
        end = datetime.combine(self.date, self.end_time)
        duration = end - start
        return duration.total_seconds() / 3600
    
    def clean(self):
        from django.core.exceptions import ValidationError
        from datetime import datetime
        
        # Validate that end_time is after start_time
        if self.end_time <= self.start_time:
            raise ValidationError('End time must be after start time.')
        
        # Validate date is not in the past
        from datetime import date
        if self.date < date.today():
            raise ValidationError('Date cannot be in the past.')
    
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)