import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  productsList: [],
};

export const addproduct = createAsyncThunk(
  "products/addproduct",

  async (Fromdata) => {
    const result = await axios.post(
      "http://localhost:5000/api/admin/addproduct",
      Fromdata,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const fetchedProducts = createAsyncThunk(
  "products/fetchedProducts",

  async () => {
    const result = await axios.get(
      "http://localhost:5000/api/admin/fetchproducts"
    );

    return result?.data;
  }
);

export const updatedProduct = createAsyncThunk(
  "products/updatedProduct",

  async ({ id, Fromdata }) => {
    const result = await axios.put(
      `http://localhost:5000/api/admin/updateproduct/${id}`,
      Fromdata,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deletedProduct = createAsyncThunk(
  "products/deletedProduct",

  async (id) => {
    const result = await axios.delete(
      `http://localhost:5000/api/admin/deleteproduct/${id}`
    );

    return result?.data;
  }
);

const AdminProductSlice = createSlice({
  name: "AdminProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedProducts.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchedProducts.fulfilled, (state, action) => {
        state.productsList = action.payload.data;
        state.isloading = false;
      })
      .addCase(fetchedProducts.rejected, (state, action) => {
        state.isloading = false;

        state.productsList = [];
      });
  },
});

export default AdminProductSlice.reducer;
