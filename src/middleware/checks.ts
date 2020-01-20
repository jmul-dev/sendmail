import { Request, Response, NextFunction } from 'express';
import { HTTP400Error } from '../utils/httpErrors';

export const checkSesParams = (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.accessKeyId) {
    throw new HTTP400Error({ error: true, message: 'Missing accessKeyId parameter' });
  } else if (!req.query.secretAccessKey) {
    throw new HTTP400Error({ error: true, message: 'Missing secretAccessKey parameter' });
  } else if (!req.query.region) {
    throw new HTTP400Error({ error: true, message: 'Missing region parameter' });
  } else if (!req.query.fromName) {
    throw new HTTP400Error({ error: true, message: 'Missing fromName parameter' });
  } else if (!req.query.fromEmail) {
    throw new HTTP400Error({ error: true, message: 'Missing fromEmail parameter' });
  } else if (!req.query.toEmail) {
    throw new HTTP400Error({ error: true, message: 'Missing toEmail parameter' });
  } else if (!req.query.subject) {
    throw new HTTP400Error({ error: true, message: 'Missing subject parameter' });
  } else if (!req.query.message) {
    throw new HTTP400Error({ error: true, message: 'Missing message parameter' });
  } else {
    next();
  }
};

export const checkMailtrapParams = (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.username) {
    throw new HTTP400Error({ error: true, message: 'Missing username parameter' });
  } else if (!req.query.password) {
    throw new HTTP400Error({ error: true, message: 'Missing password parameter' });
  } else if (!req.query.fromName) {
    throw new HTTP400Error({ error: true, message: 'Missing fromName parameter' });
  } else if (!req.query.fromEmail) {
    throw new HTTP400Error({ error: true, message: 'Missing fromEmail parameter' });
  } else if (!req.query.toEmail) {
    throw new HTTP400Error({ error: true, message: 'Missing toEmail parameter' });
  } else if (!req.query.subject) {
    throw new HTTP400Error({ error: true, message: 'Missing subject parameter' });
  } else if (!req.query.message) {
    throw new HTTP400Error({ error: true, message: 'Missing message parameter' });
  } else {
    next();
  }
};
