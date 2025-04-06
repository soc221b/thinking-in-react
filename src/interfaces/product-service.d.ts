import { IProduct } from "./product";

export interface IProductService {
  getProducts(): Promise<IProduct[]>;
}
