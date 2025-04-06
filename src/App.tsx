import { useContext, useEffect, useState } from "react";
import FilterableProductTable from "./FilterableProductTable";
import { ProductServiceContext } from "./product-service";
import { Product } from "./product";

function App() {
  const productService = useContext(ProductServiceContext);
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    productService.getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return products ? (
    <FilterableProductTable products={products} />
  ) : (
    <div>Loading...</div>
  );
}

export default App;
