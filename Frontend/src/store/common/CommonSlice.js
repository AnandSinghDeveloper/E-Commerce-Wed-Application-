import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  featureList: [],
 
};

export const AddFeatureImage = createAsyncThunk(
  "order/createNewOrder",

  async (orderdata) => {
    const response = await axios.post(
      "http://localhost:5000/api/Oder/createOrder",
      orderdata
    );
    return response?.data;
  }
);



export const GetFeatureImages = createAsyncThunk(
  "order/getAllOderByUser",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:5000/api/Oder/listOder/${userId}`
    );
    return response?.data;
  }
);



const FeatureSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetFeatureImages.pending, (state) => {
        state.isloading = true;
      })
      .addCase(GetFeatureImages.fulfilled, (state, action) => {
        state.isloading = false;
        state.featureList = action.payload.data;
      })
      .addCase(GetFeatureImages.rejected, (state, action) => {
        state.isloading = false;
        state.featureList = [];
      })
    
  },
});

export default FeatureSlice.reducer;
