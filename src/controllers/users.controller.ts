import { Request, Response } from 'express';

import { InUser } from '../interfaces';
import userService from '../services/users.service';

async function create(req: Request, res: Response) {
  const user = req.body as InUser;
  const { status, token } = await userService.create(user);
  res.status(status).json({ token });
}

export default {
  create,
};