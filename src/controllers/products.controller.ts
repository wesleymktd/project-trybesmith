import { Request, Response } from 'express';

import { Product } from '../interfaces';
import * as productService from '../services/products.service';

export async function create(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
}

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
}