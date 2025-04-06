import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProductService, ProductServiceContext } from "./product-service.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductServiceContext.Provider value={new ProductService()}>
      <App />
    </ProductServiceContext.Provider>
  </React.StrictMode>
);
