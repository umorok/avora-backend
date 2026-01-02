from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import Reservation

@receiver(post_save, sender=Reservation)
def send_status_email(sender, instance, created, **kwargs):
    """
    Send email when:
    1. New reservation created (confirmation)
    2. Reservation status changes to accepted/declined
    """
    
    if created:
        # Initial confirmation email
        send_confirmation_email(instance)
        return
    
    # For updates, check if status changed
    try:
        # Get the old instance from database before update
        if instance.pk:  # Make sure it's saved
            old_instance = Reservation.objects.get(pk=instance.pk)
            old_status = old_instance.status
            
            # Only send if status changed TO accepted/declined
            if old_status != instance.status and instance.status in ['accepted', 'declined']:
                send_status_update_email(instance)
                
    except Reservation.DoesNotExist:
        # Instance doesn't exist yet (shouldn't happen on update)
        pass
    except Exception as e:
        # Log error but don't crash
        import logging
        logger = logging.getLogger(__name__)
        logger.error(f"Error sending status email: {e}")

def send_confirmation_email(reservation):
    """Send initial confirmation email"""
    subject = f'Reservation Received #{reservation.id}'
    message = f"""
Hello {reservation.name},

Thanks for your reservation request. We’ve received it and our team is currently reviewing the details.

Reservation Details:
- Date: {reservation.date}
- Time: {reservation.start_time} - {reservation.end_time}
- Guests: {reservation.number_of_guests}
- Status: Pending

{f'Special Requests: {reservation.special_requests}' if reservation.special_requests else ''}

We will review your request and notify you once a decision is made.

Best regards,
The Avora Team
"""
    send_mail(
        subject,
        message.strip(),
        settings.DEFAULT_FROM_EMAIL,
        [reservation.email],
        fail_silently=True,
    )

def send_status_update_email(reservation):
    """Send email when status changes to accepted/declined"""
    if reservation.status == 'accepted':
        subject = f'Reservation Accepted #{reservation.id}'
        action = "accepted"
        message_body = "Great news! Your reservation has been accepted. We look forward to serving you!"
    else:  # declined
        subject = f'Reservation Declined #{reservation.id}'
        action = "declined"
        message_body = "We regret to inform you that your reservation has been declined. We apologize for any inconvenience."
    
    message = f"""
Hello {reservation.name},

Your reservation has been {action}.

Reservation Details:
- Table ID: #{reservation.id}
- Date: {reservation.date}
- Time: {reservation.start_time} - {reservation.end_time}
- Guests: {reservation.number_of_guests}
- Status: {reservation.get_status_display()}

{message_body}

Best regards,
The Avora Team
"""
    send_mail(
        subject,
        message.strip(),
        settings.DEFAULT_FROM_EMAIL,
        [reservation.email],
        fail_silently=True,
    )