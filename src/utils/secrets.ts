import { existsSync, readFileSync, writeFileSync } from 'fs';

function get(): any {
  if (!existsSync('./secrets.json')) writeFileSync('./secrets.json', '{}');

  return JSON.parse(readFileSync('./secrets.json', { encoding: 'utf-8' }));
}

function set(newSecrets: any) {
  writeFileSync('./secrets.json', JSON.stringify(newSecrets));
}

function exists(): boolean {
  return existsSync('./secrets.json');
}

export { get, set, exists };
export default { get, set, exists };
