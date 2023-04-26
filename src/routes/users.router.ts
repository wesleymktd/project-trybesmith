import { Router } from 'express';

import usersController from '../controllers/users.controller';
import validateUsers from '../middlewares/validateUsers';

const router = Router();

router.post('/', validateUsers, usersController.create);

// router.get('/', usersController.getAll);

export default router;