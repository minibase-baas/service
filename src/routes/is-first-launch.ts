import { Response } from 'express';
import secrets from '../utils/secrets';

export default (_: any, res: Response) => {
  try {
    let isFirstLaunch = false;

    if (!secrets.get().password) isFirstLaunch = true;

    res.json({
      message: 'Success',
      payload: {
        isFirstLaunch: isFirstLaunch,
      },
    });
  } catch {
    res.status(500).json({
      message: 'Internal server error',
      payload: null,
    });
  }
};
