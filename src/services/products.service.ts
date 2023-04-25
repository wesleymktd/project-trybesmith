import { Product } from '../interfaces';
import * as productModel from '../models/products.model';

export async function create(product: Product) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export async function getAll() {
  const data = await productModel.getAll();
  return { status: 200, data };
}