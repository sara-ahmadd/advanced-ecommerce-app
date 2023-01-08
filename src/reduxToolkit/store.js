import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./UserSlice/UserSlice";

const store = configureStore({
  reducer: {
    userReducer,
  },
});
export default store;
