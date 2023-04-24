export interface InProduct {
  name: string;
  amount: string;
}

export interface Product extends InProduct {
  id: number;
}