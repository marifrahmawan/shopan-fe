import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/Layout/RootLayout";
import Homepage from "@/pages/Home/Homepage";
import ShopPage from "@/pages/Shop/ShopPage";
import RegisterPage from "@/pages/Auth/RegisterPage";
import Product from "@/pages/Product/Product";
import LoginPage from "@/pages/Auth/LoginPage";
import AdminHomePage from "@/pages/Admin";
import AdminLayout from "@/components/Layout/AdminLayout";

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
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHomePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
