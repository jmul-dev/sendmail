import { Request, Response } from 'express';
import { sesSendmail, mailtrapSendmail } from './SendmailController';

export default [
  {
    path: '/api/v1/sendmail/ses',
    method: 'post',
    handler: [
      async ({ query }: Request, res: Response) => {
        const response = await sesSendmail(
          query.accessKeyId,
          query.secretAccessKey,
          query.region,
          query.fromName,
          query.fromEmail,
          query.toEmail,
          query.subject,
          query.message
        );
        res.status(200).send(JSON.stringify(response));
      }
    ]
  },
  {
    path: '/api/v1/sendmail/mailtrap',
    method: 'post',
    handler: [
      async ({ query }: Request, res: Response) => {
        const response = await mailtrapSendmail(
          query.username,
          query.password,
          query.fromName,
          query.fromEmail,
          query.toEmail,
          query.subject,
          query.message
        );
        res.status(200).send(JSON.stringify(response));
      }
    ]
  }
];
