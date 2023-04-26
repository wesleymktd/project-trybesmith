import { NextFunction, Request, Response } from 'express';
import { InOrder } from '../interfaces';

export default function validateOrder(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { productsIds } = req.body as InOrder;

  if (!productsIds) {
    const message = '"productsIds" is required';
    return res.status(400).json({ message });
  }

  if (!Array.isArray(productsIds)) {
    const message = '"productsIds" must be an array';
    return res.status(422).json({ message });
  }

  if (productsIds.length === 0) {
    const message = '"productsIds" must include only numbers';
    return res.status(422).json({ message });
  }

  next();
}