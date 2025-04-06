import { useContext, useEffect, useState } from "react";
import FilterableProductTable from "./App/FilterableProductTable";
import { ProductServiceContext } from "./product-service-context";
import { IProduct } from "./interfaces/product";

function App() {
  const productService = useContext(ProductServiceContext);
  const [products, setProducts] = useState<IProduct[]>();
  useEffect(() => {
    productService.getProducts().then((products) => {
      setProducts(products);
    });
  }, [productService]);

  return products ? (
    <FilterableProductTable products={products} />
  ) : (
    <div>Loading...</div>
  );
}

export default App;
