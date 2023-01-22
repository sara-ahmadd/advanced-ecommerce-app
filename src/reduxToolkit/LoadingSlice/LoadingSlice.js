import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = true;
    },
    isNotLoading: (state) => {
      state.loading = false;
    },
  },
});

export const loaderReducer = loadingSlice.reducer;
export const loaderActions = loadingSlice.actions;
