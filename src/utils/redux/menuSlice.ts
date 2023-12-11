import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMobileMenu: false,
  showFlyoutCart: false,
};

export const menuSlice = createSlice({
  name: "showMenu",
  initialState,
  reducers: {
    showMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu;
    },
    showFlyoutCartMenu: (state) => {
      state.showFlyoutCart = !state.showFlyoutCart;
    },
  },
});

export const { showMenu, showFlyoutCartMenu } = menuSlice.actions;

export default menuSlice.reducer;
