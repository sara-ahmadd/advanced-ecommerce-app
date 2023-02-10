import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cart = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    refreshCart: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      let item = state.products.find((x) => x.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.products.push(product);
      }
    },
    deleteFromCart: (state, action) => {
      state.products = state.products.filter((x) => x.id !== action.payload);
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});
export const cartReducer = cart.reducer;
export const cartActions = cart.actions;
