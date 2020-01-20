import dotenv from 'dotenv';
import aws from 'aws-sdk';

dotenv.config();

export const send = async (
  accessKeyId: string,
  secretAccessKey: string,
  region: string,
  fromName: string,
  fromEmail: string,
  toEmail: string[],
  subject: string,
  message: string
) => {
  try {
    const ses = new aws.SES({ apiVersion: process.env.AWS_SES_API_VERSION, accessKeyId, secretAccessKey, region });
    const from = `"${fromName}" <${fromEmail}>`;
    const params = {
      Destination: {
        ToAddresses: toEmail
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: message
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject
        }
      },
      ReturnPath: from,
      Source: from
    };
    const response = await ses.sendEmail(params).promise();
    return { error: false, message: null, sesResponse: { ...response }, timestamp: Date.now() };
  } catch (err) {
    return { error: true, message: err.message || 'Unable to send email via Amazon SES' };
  }
};
