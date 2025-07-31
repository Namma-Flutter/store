import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Catalog from "./components/Catalog.jsx";
import "./index.css";
import Layout from "./components/Layout.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Wishlist from "./components/Wishlist.jsx";
import { Navigate } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/p",
    element: <Navigate to={"/"} replace />,
  },
  {
    path: "/p/:id",
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ProductProvider>
  </React.StrictMode>
);
