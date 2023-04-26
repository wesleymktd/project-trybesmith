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

export async function getByUserName(username: string): Promise<User | null> {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const values = [username];

  const [data] = await connection.execute(query, values);
  const [user] = data as User[];
  return user || null;
}