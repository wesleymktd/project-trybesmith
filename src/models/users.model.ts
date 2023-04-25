import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { InUser, User } from '../interfaces';

export async function create(user: InUser): Promise<User> {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
    values (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: User = { id, ...user };
  return newUser;
}

// export async function getAll(): Promise<Product[]> {
//   const query = 'SELECT * FROM Trybesmith.products';
//   const [products] = await connection.execute(query);
//   return products as Product[];
// }

export function xab() {
  return 'xab';
}