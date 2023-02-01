import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    userId: null,
  },
  authorized: false,
  cart: [],
};

export let UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      let data = action.payload;
      state.user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        userId: data.userId,
      };
      state.authorized = true;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {
        firstName: null,
        lastName: null,
        email: null,
        userId: null,
      };
      state.authorized = false;
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

export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
