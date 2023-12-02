import { configureStore } from "@reduxjs/toolkit";
import showMenuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    showMenu: showMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
