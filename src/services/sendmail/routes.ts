import { Request, Response } from 'express';
import { sesSendmail, mailtrapSendmail } from './SendmailController';
import { checkSesParams, checkMailtrapParams } from '../../middleware/checks';

export default [
  {
    path: '/api/v1/sendmail/ses',
    method: 'post',
    handler: [
      checkSesParams,
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
      checkMailtrapParams,
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
