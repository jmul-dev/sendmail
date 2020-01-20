import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export const send = async (
  username: string,
  password: string,
  fromName: string,
  fromEmail: string,
  toEmail: string[],
  subject: string,
  message: string
) => {
  try {
    const from = `"${fromName}" <${fromEmail}>`;
    const config = `smtp://${username}:${password}@${process.env.MAILTRAP_HOST}/?pool=true&secure=true&port=${
      process.env.MAILTRAP_PORT
    }`;
    const transporter = nodemailer.createTransport(config);
    const response = await transporter.sendMail({ to: toEmail, subject, html: message, from });
    response.messageId = response.messageId.replace('<', '').replace('>', '');
    transporter.close();
    return {
      error: false,
      message: null,
      mailtrapResponse: { envelope: response.envelope, messageId: response.messageId },
      timestamp: Date.now()
    };
  } catch (err) {
    return { error: true, message: err.response || 'Unable to send email via mailtrap' };
  }
};
