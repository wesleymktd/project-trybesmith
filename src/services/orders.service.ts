// import { Order } from '../interfaces';
import * as ordersModel from '../models/order.model';

// export async function create(user: InUser) {
//   const { username, vocation, level } = await userModel.create(user);
//   const token = jwt.sign({ username, vocation, level }, secret, config);
//   return { status: 201, token };
// }

export async function getAll() {
  const data = await ordersModel.getAll();
  return { status: 200, data };
}

export function xab() {
  return 'xab';
} 