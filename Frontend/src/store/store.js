import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/auth-slice";
import AdminProductSlice from "./Admin/ProductSlice/ProductSlice";
import shopProductSlice from "./Shop/shopProductSlice";
import shopCartSlice from "./Shop/shopCartSlice";
import addressSlice from "./Shop/addressSlice";
import oderSlice from "./Shop/OderSlice";
import AdorderSlice from "./Admin/ADorderSlice";
import searchSlice from "./Shop/searchSlice";
import ReviewSlice from "./Shop/reviewSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminOrder: AdorderSlice,
    adminProduct: AdminProductSlice,
    shopProduct: shopProductSlice,
    shopCart: shopCartSlice,
    address: addressSlice,
    order: oderSlice,
    search: searchSlice,
    reviews: ReviewSlice,
  },
});

export default store;
