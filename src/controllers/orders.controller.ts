import { Request, Response } from 'express';

// import { InUser } from '../interfaces';
import * as orderService from '../services/orders.service';

// export async function create(req: Request, res: Response) {
//   const user = req.body as InUser;
//   const { status, token } = await userService.create(user);
//   res.status(status).json({ token });
// }

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
}

export function xab() {
  return 'xab';
}