import { Router } from 'express';

import * as productController from '../controllers/products.controller';
import validateProducts from '../middlewares/validateProducts';

const router = Router();

router.post('/', validateProducts, productController.create);

router.get('/', productController.getAll);

export default router;