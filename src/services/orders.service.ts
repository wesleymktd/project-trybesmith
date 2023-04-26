import * as ordersModel from '../models/order.model';

export async function getAll() {
  const data = await ordersModel.getAll();
  return { status: 200, data };
}

export async function createOrder(userId: number, productsIds: number[]) {
  await ordersModel.createOrder(userId, productsIds);
  return { userId, productsIds };
} 