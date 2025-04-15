import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth-slice/auth-slice"
import AdminProductSlice from "./Admin/ProductSlice/ProductSlice"



const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProduct: AdminProductSlice
  }
})

export default store