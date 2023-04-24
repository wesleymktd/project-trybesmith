import { Request, Response } from 'express';

import { Product } from '../interfaces';
import * as productService from '../services/products.service';

export async function create(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
}

export function xablau() {
  return 'xab';
}