import express, { Response } from 'express';
import log from './utils/logger';
import { cors } from './middleware';

const port: number = Number(process.env.PORT) || 8080;

const server = express();

server.use(cors);
server.use(express.json());

server.get('/', (_: any, res: Response) => {
  res.json({
    message: 'Success',
    payload: 'Hello, World!',
  });
});

server.listen(port, () => {
  log('startup', port);
});
