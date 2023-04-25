import { NextFunction, Request, Response } from 'express';
import { InProduct } from '../interfaces';

function validateName(name: unknown) {
  if (!name) {
    const message = '"name" is required';
    return ({ status: 400, message });
  }

  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return ({ status: 422, message });
  }

  if (name.length <= 2) {
    const message = '"name" length must be at least 3 characters long';
    return ({ status: 422, message });
  }
}

function validateAmount(amount: unknown) {
  if (!amount) {
    const message = '"amount" is required';
    return ({ status: 400, message });
  }

  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return ({ status: 422, message });
  }

  if (amount.length <= 2) {
    const message = '"amount" length must be at least 3 characters long';
    return ({ status: 422, message });
  }
}

export default function validateProducts(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, amount } = req.body as InProduct;

  const errName = validateName(name);

  if (errName) return res.status(errName.status).json({ message: errName.message });
  
  const errAmount = validateAmount(amount);

  if (errAmount) return res.status(errAmount.status).json({ message: errAmount.message });

  next();
}