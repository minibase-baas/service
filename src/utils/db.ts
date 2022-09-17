import { readFileSync, writeFileSync, existsSync } from 'fs';

const dbFilePath = process.env.DB || './db.json';

function openDb(): any {
  return JSON.parse(readFileSync(dbFilePath, { encoding: 'utf-8' }));
}

function saveDb(db: any) {
  writeFileSync(dbFilePath, JSON.stringify(db));
}

function createIfNotExist() {
  if (!existsSync(dbFilePath)) writeFileSync(dbFilePath, '{}');
}

export { openDb, saveDb, createIfNotExist };

export default {
  openDb,
  saveDb,
  createIfNotExist,
};
