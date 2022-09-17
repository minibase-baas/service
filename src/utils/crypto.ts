import { createHash, randomBytes } from 'crypto';
import secrets from './secrets';

if (!secrets.exists() || !secrets.get().salt)
  secrets.set({
    salt: randomBytes(64).toString('hex'),
    password: secrets.get().password,
    apiKey: secrets.get().apiKey,
  });

type RandomHashValues = {
  originalValue: string;
  hash: string;
};

function randomHash(): RandomHashValues {
  const originalValue: string = randomBytes(16).toString('hex');
  const hash: string = createHash('sha256').update(originalValue).digest('hex');

  return {
    originalValue: originalValue,
    hash: hash,
  };
}

function hash(data: string): string {
  return createHash('sha256').update(data).digest('hex');
}

function salt(data: string): string {
  return `${data}:${secrets.get().salt}`;
}

export { hash, randomHash, salt };
export default { hash, randomHash, salt };
