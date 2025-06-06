import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  addressList: [],
};

export const AddAddress = createAsyncThunk(
  "/address/AddAddress",

  async (FormData) => {
    const response = await axios.post("http://localhost:5000/api/address/addAddress", FormData);

    return response?.data;
  }
);

export const FetchAddress = createAsyncThunk(
  "/address/FetchAddress",
  async (userId) => {
    const response = await axios.get(`http://localhost:5000/api/address/fetchAddress/${userId}`);

    return response?.data;
  }
);

export const UpdateAddress = createAsyncThunk(
  "/address/UpdateAddress",
  async ({ userId, addressId, formData}) => {
    const response = await axios.put(
      `http://localhost:5000/api/address/updateAddress/${userId}/${addressId}`,
      formData
    );

    return response?.data;
  }
);

export const DeleteAddress = createAsyncThunk(
  '/address/DeleteAddress',
  async ({ userId, addressId }) => {
    const response = await axios.delete(`http://localhost:5000/api/address/deleteAddress/${userId}/${addressId}`);

    return response?.data;
  }
)

const addressSlice = createSlice({
  
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddAddress.pending, (state) => {
      state.isloading = true;
    }).addCase(AddAddress.fulfilled, (state, action) => {
      state.isloading = false;
      console.log(action.payload);      
      state.addressList = action.payload.data;
    }).addCase(AddAddress.rejected, (state, action) => {
      state.isloading = false;
      state.addressList = [];
    }).addCase(FetchAddress.pending, (state) => {
      state.isloading = true;
    }).addCase(FetchAddress.fulfilled, (state, action) => {
      state.isloading = false;
      console.log(action.payload);      
      state.addressList = action.payload.data;
    }).addCase(FetchAddress.rejected, (state, action) => {
      state.isloading = false;
      state.addressList = [];
    }).addCase(UpdateAddress.pending, (state) => {
      state.isloading = true;
    }).addCase(UpdateAddress.fulfilled, (state, action) => {
      state.isloading = false;
      console.log(action.payload);      
      state.addressList = action.payload.data;
    }).addCase(UpdateAddress.rejected, (state, action) => {
      state.isloading = false;
      state.addressList = [];
    }).addCase(DeleteAddress.pending, (state) => {
      state.isloading = true;
    }).addCase(DeleteAddress.fulfilled, (state, action) => {
      state.isloading = false;
      console.log(action.payload);      
      state.addressList = action.payload.data;
    }).addCase(DeleteAddress.rejected, (state, action) => {
      state.isloading = false;
      state.addressList = [];
    })
  },
});

export default addressSlice.reducer;
