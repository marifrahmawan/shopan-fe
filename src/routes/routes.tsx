import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/RootLayout";
import Homepage from "@/pages/Home/Homepage";
import ShopPage from "@/pages/Shop/ShopPage";
import RegisterPage from "@/pages/Auth/RegisterPage";
import Product from "@/pages/Product/Product";

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
    path: "/register",
    element: <RegisterPage />,
  },
]);
