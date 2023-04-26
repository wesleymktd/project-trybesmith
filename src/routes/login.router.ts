import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';

import loginController from '../controllers/login.controller';

const router = Router();

router.post('/', validateLogin, loginController);

export default router;