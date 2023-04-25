import { Router } from 'express';

import * as ordersController from '../controllers/orders.controller';

const router = Router();

router.get('/', ordersController.getAll);

// router.get('/', usersController.getAll);

export default router;