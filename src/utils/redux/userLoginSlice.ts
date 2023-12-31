import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserLogin {
  data?: {
    _id: string;
    userName: string;
    email: string;
    role: string;
    accessToken: string;
  };
}

const initialState = {
  data: {
    _id: "",
    userName: "",
    email: "",
    role: "",
    accessToken: "",
  },
} as IUserLogin;

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    LOGIN_USER_INFO: (state, action: PayloadAction<IUserLogin>) => {
      state.data = action.payload.data;
    },
    LOGOUT_USER: (state) => {
      state.data = initialState.data;
    },
  },
});

export const { LOGIN_USER_INFO, LOGOUT_USER } = userLoginSlice.actions;

export default userLoginSlice.reducer;
