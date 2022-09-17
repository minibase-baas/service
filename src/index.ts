import express from 'express';
import log from './utils/logger';
import middleware from './middleware';
import db from './utils/db';

db.createIfNotExist();

const port: number = Number(process.env.PORT) || 8080;

const server = express();

server.use(middleware.cors);
server.use(express.json());

server.listen(port, () => {
  log('startup', { port: port });
});
