// import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { Order } from '../interfaces';

export async function getAll(): Promise<Order[]> {
  const query = `SELECT 
    o.id,
    o.user_id AS userId,    
    JSON_ARRAYAGG(p.id) AS productsIds   
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.users AS u ON o.user_id = u.id
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY p.order_id`;
  const [orders] = await connection.execute(query);
  return orders as Order[];
}

// export async function getAll(): Promise<Product[]> {
//   const query = 'SELECT * FROM Trybesmith.products';
//   const [products] = await connection.execute(query);
//   return products as Product[];
// }

export function xab() {
  return 'xab';
}