import * as SibApiV3Sdk from '@sendinblue/client';

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
    const senderEmail = from?.email || '4faddyt@gmail.com';
    const senderName = from?.name || 'Fawad Haris';

    // Configure API key authorization
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    // Create the email sender
    const sender = new SibApiV3Sdk.SendSmtpEmailSender();
    sender.email = senderEmail;
    sender.name = senderName;

    // Create the email recipient
    const recipient = new SibApiV3Sdk.SendSmtpEmailTo();
    recipient.email = to;

    // Create the email object
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = sender;
    sendSmtpEmail.to = [recipient];
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.textContent = text;

    // Optional: HTML content
    if (text.includes('<')) {
      sendSmtpEmail.htmlContent = text;
    }

    // Send the email
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully via Brevo API:', data);
    return true;
  } catch (error) {
    console.error('Error sending email via Brevo API:', error);
    return false;
  }
}