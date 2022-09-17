import { Request, Response } from 'express';
import secrets from '../utils/secrets';
import crypto from '../utils/crypto';

export default (req: Request, res: Response) => {
  try {
    if (secrets.get().password) {
      return;
    }

    const apiKey = crypto.randomHash();

    secrets.set({
      password: req.body.newPassword,
      apiKey: crypto.hash(crypto.salt(apiKey.hash)),
      salt: secrets.get().salt,
    });

    res.json({
      message: 'Success',
      payload: {
        apiKey: apiKey.originalValue,
      },
    });
  } catch {
    res.status(500).json({
      message: 'Internal server error',
      payload: null,
    });
  }
};
