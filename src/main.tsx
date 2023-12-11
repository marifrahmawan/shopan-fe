import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "@/utils/redux/store";
import { Provider } from "react-redux";

import { router } from "@/routes/routes.tsx";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/utils/context/theme-provider.tsx";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
