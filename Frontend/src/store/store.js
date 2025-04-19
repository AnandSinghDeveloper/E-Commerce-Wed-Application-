import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/auth-slice";
import AdminProductSlice from "./Admin/ProductSlice/ProductSlice";
import shopProductSlice from "./Shop/shopProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProduct: AdminProductSlice,
    shopProduct: shopProductSlice,
  },
});

export default store;
