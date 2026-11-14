from django.contrib import admin
from .models import Reservation
from django.utils.html import format_html

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'name', 'email', 'date', 'start_time', 
        'end_time', 'number_of_guests', 'status_badge', 'created_at'
    )
    list_filter = ('status', 'date', 'created_at')
    search_fields = ('name', 'email', 'phone')
    readonly_fields = ('created_at', 'updated_at', 'duration_display')
    fieldsets = (
        ('Personal Information', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Reservation Details', {
            'fields': ('date', 'start_time', 'end_time', 'number_of_guests')
        }),
        ('Additional Information', {
            'fields': ('special_requests', 'status')
        }),
        ('System Information', {
            'fields': ('created_at', 'updated_at', 'duration_display'),
            'classes': ('collapse',)
        }),
    )
    actions = ['mark_as_accepted', 'mark_as_declined']
    
    def status_badge(self, obj):
        colors = {
            'pending': 'orange',
            'accepted': 'green',
            'declined': 'red'
        }
        return format_html(
            '<span style="color: white; background-color: {}; padding: 3px 8px; border-radius: 3px;">{}</span>',
            colors[obj.status],
            obj.get_status_display()
        )
    status_badge.short_description = 'Status'
    status_badge.admin_order_field = 'status'
    
    def duration_display(self, obj):
        return f"{obj.duration:.1f} hours"
    duration_display.short_description = 'Duration'
    
    def mark_as_accepted(self, request, queryset):
        updated = queryset.update(status='accepted')
        self.message_user(request, f'{updated} reservation(s) marked as accepted.')
    mark_as_accepted.short_description = "Mark selected reservations as accepted"
    
    def mark_as_declined(self, request, queryset):
        updated = queryset.update(status='declined')
        self.message_user(request, f'{updated} reservation(s) marked as declined.')
    mark_as_declined.short_description = "Mark selected reservations as declined"
    
    def get_queryset(self, request):
        return super().get_queryset(request).order_by('-date', '-start_time')