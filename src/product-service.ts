import { createContext } from "react";
import { Product } from "./product";

export interface IProductService {
  getProducts(): Promise<Product[]>;
}

export class ProductService implements IProductService {
  getProducts(): Promise<Product[]> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
          {
            category: "Fruits",
            price: "$1",
            stocked: true,
            name: "Dragonfruit",
          },
          {
            category: "Fruits",
            price: "$2",
            stocked: false,
            name: "Passionfruit",
          },
          {
            category: "Vegetables",
            price: "$2",
            stocked: true,
            name: "Spinach",
          },
          {
            category: "Vegetables",
            price: "$4",
            stocked: false,
            name: "Pumpkin",
          },
          { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
        ]);
      }, 500)
    );
  }
}

export const ProductServiceContext = createContext(
  undefined as unknown as IProductService
);
