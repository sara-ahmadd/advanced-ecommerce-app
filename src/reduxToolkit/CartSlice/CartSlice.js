import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: Math.floor(Math.random() * 100 + Math.random() * 100),
      title: "test product 1",
      quantity: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoBg2fJNYeAtEz7BAGncnHUZ1_Gt1kylEzQ&usqp=CAU",

      price: 110,
    },
  ],
};

const cart = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
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
