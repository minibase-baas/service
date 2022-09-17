import IsFirstLaunch from './routes/is-first-launch';
import ChangePassword from './routes/change-password';

import { Router } from 'express';

const router = Router();

router.get('/is-first-launch', IsFirstLaunch);
router.post('/change-password', ChangePassword);

export default router;
