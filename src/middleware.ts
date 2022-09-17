import { Request, Response } from 'express';
import log from './utils/logger';

function cors(_: any, res: Response, next: Function) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
}

function logger(req: Request, _: any, next: Function) {
  next();
  log('request', { method: req.method, route: req.route });
}

export { cors, logger };

export default { cors, logger };
