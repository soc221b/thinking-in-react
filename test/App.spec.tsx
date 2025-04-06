import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import App from "../src/App";
import { ProductService } from "../src/product-service";
import { ProductServiceContext } from "../src/product-service-context";

test("renders products", async () => {
  const spy = vi
    .spyOn(ProductService.prototype, "getProducts")
    .mockResolvedValue([
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    ]);

  const { getByText } = render(
    <ProductServiceContext.Provider value={new ProductService()}>
      <App />
    </ProductServiceContext.Provider>
  );

  await expect.element(getByText("Apple")).toBeInTheDocument();
  expect(spy).toHaveBeenCalled();
});
