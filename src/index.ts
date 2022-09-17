import express from 'express';
import log from './utils/logger';
import middleware from './middleware';
import db from './utils/db';
import router from './router';

db.createIfNotExist();

const port: number = Number(process.env.PORT) || 8080;

const server = express();

server.disable('x-powered-by');

server.use(middleware.cors);
server.use(express.json());
server.use(router);

server.listen(port, () => {
  log('startup', { port: port });
});
