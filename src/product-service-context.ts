import { createContext } from "react";
import { IProductService } from "./interfaces/product-service";

export const ProductServiceContext = createContext<IProductService>(null!);
