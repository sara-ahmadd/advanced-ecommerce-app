import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./UserSlice/UserSlice";
import { loaderReducer } from "./LoadingSlice/LoadingSlice";

const store = configureStore({
  reducer: {
    userReducer,
    loaderReducer,
  },
});
export default store;
