import { Product } from '../interfaces';
import * as productModel from '../models/products.model';

export async function create(product: Product) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export function xablau() {
  return 'xab';
}