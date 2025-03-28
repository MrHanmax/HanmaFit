import axios from 'axios';

interface SendEmailParams {
  to: string;
  subject: string;
  text: string;
  from?: {
    email: string;
    name?: string;
  };
}

/**
 * Send email using Brevo (formerly SendinBlue) API
 */
export async function sendEmail({ to, subject, text, from }: SendEmailParams): Promise<boolean> {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    
    if (!apiKey) {
      console.error('Missing Brevo API key');
      return false;
    }

    // Default sender email or use provided sender
    const senderEmail = from?.email || 'hanma.pk@gmail.com';
    const senderName = from?.name || 'Hanma Fitness Studio';

    const response = await axios.post(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        sender: {
          name: senderName,
          email: senderEmail
        },
        to: [{ email: to }],
        subject: subject,
        textContent: text
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': apiKey
        }
      }
    );

    if (response.status >= 200 && response.status < 300) {
      console.log('Email sent successfully via Brevo API');
      return true;
    } else {
      console.error('Failed to send email:', response.status, response.data);
      return false;
    }
  } catch (error) {
    console.error('Error sending email via Brevo API:', error);
    return false;
  }
}