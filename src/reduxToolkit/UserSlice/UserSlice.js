import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  authorized: false,
};

export let UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.authorized = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {};
      state.authorized = false;
    },
  },
});

export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
