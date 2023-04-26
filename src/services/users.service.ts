import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';
import { InUser } from '../interfaces';
import * as userModel from '../models/users.model';

async function create(user: InUser) {
  const { username, vocation, level } = await userModel.create(user);
  const token = jwt.sign({ username, vocation, level }, secret, config);
  return { status: 201, token };
}

export default {
  create,
};