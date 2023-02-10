import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  userId: null,
  authorized: false,
  cart: [],
};

export let UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      let data = action.payload;
      state.firstName = data.firstName;
      state.lastName = data.lastName ?? " ";
      state.email = data.email;
      state.userId = data.userId;
      state.authorized = true;
    },
    register: (state, action) => {
      state = action.payload;
    },
    logOut: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.userId = null;
      state.authorized = null;
    },
  },
});

export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
