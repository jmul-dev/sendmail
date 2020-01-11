import { send as sesSend } from "./providers/amazonSESProvider";

export const sesSendMail = async (accessKeyId: string, secretAccessKey: string, region: string, fromName: string, fromEmail: string, toEmail: string[], subject: string, message: string) => {
	return await sesSend(accessKeyId, secretAccessKey, region, fromName, fromEmail, toEmail, subject, message);
};
