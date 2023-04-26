import jwt from 'jsonwebtoken';
import { config } from '../middlewares/jwtConfig';
import { UserCredential } from '../interfaces';
import * as userModel from '../models/users.model';

export default async function login(userCredentials: UserCredential) {
  const data = await userModel.getByUserName(userCredentials.username);

  if (data === null || data.password !== userCredentials.password) {
    return { status: 401, error: { message: 'Username or password invalid' } };
  }

  const { id, username } = data;
  const token = jwt.sign({ id, username }, 'minhaSenhaSecreta', config);
  return { status: 200, token };
}
