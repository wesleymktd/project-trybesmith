import { Request, Response } from 'express';

import * as orderService from '../services/orders.service';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
}

export async function createOrder(req: Request & { userId?: number }, res: Response) {
  const id = req.userId || 0;
  const { productsIds } = req.body;

  const orderReturn = await orderService.createOrder(id, productsIds);
  res.status(201).json(orderReturn);
}