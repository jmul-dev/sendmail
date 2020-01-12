import { send as sesSend } from './providers/amazonSESProvider';
import { send as mailtrapSend } from './providers/mailtrapProvider';

export const sesSendmail = async (
  accessKeyId: string,
  secretAccessKey: string,
  region: string,
  fromName: string,
  fromEmail: string,
  toEmail: string[],
  subject: string,
  message: string
) => {
  return await sesSend(accessKeyId, secretAccessKey, region, fromName, fromEmail, toEmail, subject, message);
};

export const mailtrapSendmail = async (
  username: string,
  password: string,
  fromName: string,
  fromEmail: string,
  toEmail: string[],
  subject: string,
  message: string
) => {
  return await mailtrapSend(username, password, fromName, fromEmail, toEmail, subject, message);
};
