import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    userId: null,
  },
  authorized: false,
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
  },
});

export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
