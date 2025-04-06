import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProductService } from "./product-service";
import { ProductServiceContext } from "./product-service-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductServiceContext.Provider value={new ProductService()}>
      <App />
    </ProductServiceContext.Provider>
  </React.StrictMode>
);
