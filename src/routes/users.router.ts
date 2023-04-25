import { Router } from 'express';

import * as usersController from '../controllers/users.controller';

const router = Router();

router.post('/', usersController.create);

// router.get('/', usersController.getAll);

export default router;