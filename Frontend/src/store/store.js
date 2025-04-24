import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/auth-slice";
import AdminProductSlice from "./Admin/ProductSlice/ProductSlice";
import shopProductSlice from "./Shop/shopProductSlice";
import shopCartSlice from "./Shop/shopCartSlice";
import addressSlice from "./Shop/addressSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProduct: AdminProductSlice,
    shopProduct: shopProductSlice,
    shopCart: shopCartSlice,
    address : addressSlice
  },
});

export default store;
