import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { InProduct, Product } from '../interfaces';

export async function create(product: InProduct): Promise<Product> {
  const { name, amount } = product;

  const query = `INSERT INTO Trybesmith.products (name, amount)
    values (?, ?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, ...product };
  return newProduct;
}

export async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as Product[];
}