import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "@/pages/Auth/RegisterPage";
import LoginPage from "@/pages/Auth/LoginPage";

import RootLayout from "@/components/Layout/RootLayout";
import Homepage from "@/pages/User/Home/Homepage";
import ShopPage from "@/pages/User/Shop/ShopPage";
import Product from "@/pages/User/Product/Product";

import AdminLayout from "@/components/Layout/AdminLayout";
import AdminHomePage from "@/pages/Admin";
import ProductsPage from "@/pages/Admin/Product/AdminProduct";
import AddProductForm from "@/pages/Admin/Product/module/AddProductForm";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import AuthProtectedRoutes from "./AuthProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:product_id",
        element: <Product />,
      },
    ],
  },
  {
    element: <AdminProtectedRoutes />,
    children: [
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <AdminHomePage />,
          },
          {
            path: "products",
            children: [
              {
                index: true,
                element: <ProductsPage />,
              },
              {
                path: "create",
                element: <AddProductForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <AuthProtectedRoutes />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
