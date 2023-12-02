import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/RootLayout";
import Homepage from "@/pages/Home/Homepage";
import ShopPage from "@/pages/Shop/ShopPage";
import RegisterPage from "@/pages/Auth/RegisterPage";

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
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
