import { Product } from './Product';


export interface Result {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
