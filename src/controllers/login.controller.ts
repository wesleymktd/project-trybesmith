import { Request, Response } from 'express';

import { UserCredential } from '../interfaces';
import loginService from '../services/login.service';

export default async function login(req: Request, res: Response) {
  const userCredentials = req.body as UserCredential;
  const { status, token, error } = await loginService(userCredentials);

  return error
    ? res.status(status).json(error)
    : res.status(status).json({ token });
}

// export async function getAll(_req: Request, res: Response) {
//   const { status, data } = await productService.getAll();
//   res.status(status).json(data);
// }
