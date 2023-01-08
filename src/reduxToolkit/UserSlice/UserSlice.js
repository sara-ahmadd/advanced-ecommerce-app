import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};

export let UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {};
    },
  },
});

export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
