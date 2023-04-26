export interface InProduct {
  name: string;
  amount: string;
}

export interface Product extends InProduct {
  id: number;
}

export interface InUser {
  username: string;
  vocation: string;
  level:string;
  password: string;
}

export interface User extends InUser {
  id: number;
}

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface UserCredential {
  username: 'string';
  password: 'string';
}

export interface InOrder {
  productsIds: number[];
}