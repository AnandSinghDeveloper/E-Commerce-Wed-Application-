import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/auth-slice";
import AdminProductSlice from "./Admin/ProductSlice/ProductSlice";
import shopProductSlice from "./Shop/shopProductSlice";
import shopCartSlice from "./Shop/shopCartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProduct: AdminProductSlice,
    shopProduct: shopProductSlice,
    shopCart: shopCartSlice,
  },
});

export default store;
