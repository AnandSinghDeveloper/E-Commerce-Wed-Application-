import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  cartItems: [],
};

export const AddToCart = createAsyncThunk(
  "shopCart/addToCart",

  async ({ userId, productId, quantity }) => {
    const response = await axios.post(
      "http://localhost:5000/api/cart/addToCart",
      { userId, productId, quantity }
    );

    return response?.data;
  }
);

export const fetchCartitems = createAsyncThunk(
  "shopCart/fetchCartitems",
  async ({ userId }) => {
    const response = await axios.get(
      `http://localhost:5000/api/cart/fetchCartitems/${userId}`
    );

    return response?.data;
  }
);

export const DeleteCartitem = createAsyncThunk(
  "shopCart/UpdateCartitemQuantity",
  async ({ userId, productId }) => {
    const response = await axios.delete(
      `http://localhost:5000/api/cart/deleteCartitem/${userId}/${productId}`
    );
    console.log(response?.data);

    return response?.data;
  }
);

export const UpdateCartitemQuantity = createAsyncThunk(
  "shopCart/DeleteCartitem",
  async ({ userId, productId, quantity }) => {
    const response = await axios.put(
      " http://localhost:5000/api/cart/updateCartitemQuantity/",
      { userId, productId, quantity }
    );

    return response?.data;
  }
);

const shopCartSlice = createSlice({
  name: "shopCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddToCart.pending, (state) => {
        state.isloading = true;
      })
      .addCase(AddToCart.fulfilled, (state, action) => {
        state.isloading = false;

        state.cartItems = action.payload.data;
      })
      .addCase(AddToCart.rejected, (state, action) => {
        state.isloading = false;
        state.cartItems = [];
      })
      .addCase(fetchCartitems.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchCartitems.fulfilled, (state, action) => {
        state.isloading = false;

        state.cartItems = action.payload.data;
      })
      .addCase(fetchCartitems.rejected, (state, action) => {
        state.isloading = false;
        state.cartItems = [];
      })
      .addCase(UpdateCartitemQuantity.pending, (state) => {
        state.isloading = true;
      })
      .addCase(UpdateCartitemQuantity.fulfilled, (state, action) => {
        state.isloading = false;

        state.cartItems = action.payload.data;
      })
      .addCase(UpdateCartitemQuantity.rejected, (state, action) => {
        state.isloading = false;
        state.cartItems = [];
      })
      .addCase(DeleteCartitem.pending, (state) => {
        state.isloading = true;
      })
      .addCase(DeleteCartitem.fulfilled, (state, action) => {
        state.isloading = false;

        state.cartItems = action.payload.data;
      })
      .addCase(DeleteCartitem.rejected, (state, action) => {
        state.isloading = false;
        state.cartItems = [];
      });
  },
});

export default shopCartSlice.reducer;
