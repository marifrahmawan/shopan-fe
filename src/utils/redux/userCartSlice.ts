import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICartRedux {
  productId: string | undefined;
}

const initialState: ICartRedux[] = [];

export const userCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    USER_CART_DATA: (state, action: PayloadAction<ICartRedux[]>) => {
      action.payload.map((e) => state.push(e));
    },

    ADD_PRODUCT_TO_CART: (state, action: PayloadAction<ICartRedux>) => {
      const productIndex = state.findIndex(
        (e) => e.productId === action.payload.productId,
      );

      if (productIndex < 0) {
        state.push({ productId: action.payload.productId });
      }
    },
  },
});

export const { USER_CART_DATA, ADD_PRODUCT_TO_CART } = userCartSlice.actions;

export default userCartSlice.reducer;
