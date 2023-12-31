// import React from "react";
import ReactDOM from "react-dom/client";

import { persistor, store } from "@/utils/redux/store";
import { Provider } from "react-redux";

import { router } from "@/routes/routes.tsx";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/utils/context/theme-provider.tsx";

import "./styles/index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
