import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./UserSlice/UserSlice";
import { cartReducer } from "./CartSlice/CartSlice";

const store = configureStore({
  reducer: {
    userReducer,
    cart: cartReducer,
  },
});
export default store;
