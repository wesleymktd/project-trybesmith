import { Router } from 'express';

import * as ordersController from '../controllers/orders.controller';
import authToken from '../middlewares/auth';
import validateOrder from '../middlewares/validateOrder';

const router = Router();

router.get('/', ordersController.getAll);

router.post('/', authToken, validateOrder, ordersController.createOrder);

export default router;