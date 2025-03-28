import nodemailer from 'nodemailer';

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
 * Send email using Brevo (formerly SendinBlue) SMTP
 */
export async function sendEmail({ to, subject, text, from }: SendEmailParams): Promise<boolean> {
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    
    if (!smtpUser || !smtpPass || !smtpFrom) {
      console.error('Missing SMTP credentials');
      return false;
    }

    // Default sender email or use provided sender
    const senderEmail = from?.email || smtpFrom;
    const senderName = from?.name || 'Hanma Fitness Studio';

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${senderName}" <${senderEmail}>`,
      to: to,
      subject: subject,
      text: text
    });

    console.log('Email sent successfully via Brevo SMTP:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email via Brevo SMTP:', error);
    return false;
  }
}