import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICartRedux {
  _id?: string;
  productId: string;
  productName: string;
  productPicture: string;
  quantity: number;
  size?: string;
  color?: string;
  dimension?: string;
  price: number;
  totalPrice?: number;
}

const initialState: ICartRedux[] = [];

export const userCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    USER_CART_DATA: (state, action: PayloadAction<ICartRedux[]>) => {
      action.payload.map((data) => {
        return state.push({ ...data });
      });
    },

    ADD_PRODUCT_TO_CART: (state, action: PayloadAction<ICartRedux>) => {
      const productIndex = state.findIndex(
        (e) =>
          e.productId === action.payload.productId &&
          e.color === action.payload.color &&
          e.dimension === action.payload.dimension &&
          e.size === action.payload.size,
      );

      if (productIndex < 0) {
        state.push({
          ...action.payload,
          totalPrice: action.payload.quantity * action.payload.price,
        });
      } else {
        state[productIndex].quantity += action.payload.quantity;
        state[productIndex].totalPrice! += action.payload.price * action.payload.quantity; // prettier-ignore
      }
    },

    REDUCE_PRODUCT_FROM_CART: (
      state,
      action: PayloadAction<{
        productId: string;
        size?: string;
        color?: string;
        dimension?: string;
      }>,
    ) => {
      const { productId, color, dimension, size } = action.payload;

      const productIndex = state.findIndex(
        (e) =>
          e.productId === productId &&
          e.color === color &&
          e.size === size &&
          e.dimension === dimension,
      );

      if (state[productIndex].quantity > 1) {
        state[productIndex].quantity -= 1;
        state[productIndex].totalPrice! -= state[productIndex].price;
      } else {
        state.splice(productIndex, 1);
      }
    },

    REMOVE_FROM_CART: (
      state,
      action: PayloadAction<{
        productId: string;
        size?: string;
        color?: string;
        dimension?: string;
      }>,
    ) => {
      const { productId, color, dimension, size } = action.payload;
      const productIndex = state.findIndex(
        (e) =>
          e.productId === productId &&
          e.color === color &&
          e.size === size &&
          e.dimension === dimension,
      );

      state.splice(productIndex, 1);
    },
  },
});

export const {
  USER_CART_DATA,
  ADD_PRODUCT_TO_CART,
  REDUCE_PRODUCT_FROM_CART,
  REMOVE_FROM_CART,
} = userCartSlice.actions;

export default userCartSlice.reducer;
