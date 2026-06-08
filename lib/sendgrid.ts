import sgMail from '@sendgrid/mail';
import { readFile } from 'fs/promises';
import path from 'path';
import type { InvestorFormData } from './validation';

function getSendGrid() {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY is not configured');
  }
  sgMail.setApiKey(apiKey);
  return sgMail;
}

export async function sendInvestorNotification(data: InvestorFormData) {
  const sg = getSendGrid();
  const to = process.env.INVESTOR_NOTIFICATION_EMAIL || 'contact@any-gym.com';
  const from = process.env.SENDGRID_FROM_EMAIL || 'contact@any-gym.com';

  await sg.send({
    to,
    from,
    subject: `New investor enquiry from ${data.fullName}`,
    text: [
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Company: ${data.company || 'Not provided'}`,
      `Investment range: ${data.investmentRange || 'Not provided'}`,
      `Message: ${data.message || 'None'}`,
    ].join('\n'),
    html: `
      <h2>New investor enquiry</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>Investment range:</strong> ${data.investmentRange || 'Not provided'}</p>
      <p><strong>Message:</strong> ${data.message || 'None'}</p>
    `,
  });
}

export async function sendInvestorPack(data: InvestorFormData) {
  const sg = getSendGrid();
  const from = process.env.SENDGRID_FROM_EMAIL || 'contact@any-gym.com';
  const packPath = path.join(process.cwd(), 'public', 'investor-pack.pdf');

  let attachments: { content: string; filename: string; type: string; disposition: string }[] = [];
  try {
    const pdfBuffer = await readFile(packPath);
    attachments = [
      {
        content: pdfBuffer.toString('base64'),
        filename: 'anygym-investor-pack.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ];
  } catch {
    // PDF not yet provided — send email without attachment
  }

  await sg.send({
    to: data.email,
    from,
    subject: 'Your anygym investor pack',
    text: `Hi ${data.fullName},\n\nThank you for your interest in anygym. Please find our investor pack attached.\n\nIf you have any questions, reply to this email or contact us at contact@any-gym.com.\n\nBest regards,\nThe anygym team`,
    html: `
      <p>Hi ${data.fullName},</p>
      <p>Thank you for your interest in <strong>anygym</strong>. ${
        attachments.length
          ? 'Please find our investor pack attached.'
          : 'We will send you our investor pack shortly. In the meantime, feel free to reply to this email with any questions.'
      }</p>
      <p>Best regards,<br>The anygym team</p>
    `,
    attachments,
  });
}
