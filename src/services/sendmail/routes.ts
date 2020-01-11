import { Request, Response } from "express";
import { sesSendMail } from "./SendmailController";

export default [
	{
		path: "/api/v1/sendMail/ses",
		method: "post",
		handler: [
			async ({ query }: Request, res: Response) => {
				const response = await sesSendMail(query.accessKeyId, query.secretAccessKey, query.region, query.fromName, query.fromEmail, query.toEmail, query.subject, query.message);
				res.status(200).send(JSON.stringify(response));
			}
		]
	}
];
