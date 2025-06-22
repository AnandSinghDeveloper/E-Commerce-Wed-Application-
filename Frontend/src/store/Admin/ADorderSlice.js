import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  orderList: [],
  orderDetails: null,
};





export const getAllOder = createAsyncThunk(
  "order/getAllOder",
  async () => {
    const response = await axios.get(
      `http://localhost:5000/api/AdOder/Oders`
    );
    return response?.data;
  }
);

export const getoderDetails = createAsyncThunk(
  "order/getoderDetails",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/AdOder/details/${id}`
    );
    return response?.data;
  }
);

export const updateOderStatus = createAsyncThunk(
  "order/updateOderStatus",
  async ({ id, orderStatus }) => {
    const response = await axios.put(
      `http://localhost:5000/api/AdOder/update/${id}`,
      {orderStatus}
    );
    return response?.data;
  }
);

const AdorderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOder.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getAllOder.fulfilled, (state, action) => {
        state.isloading = false;
       
        
        state.orderList = action.payload.data;
      })
      .addCase(getAllOder.rejected, (state, action) => {
        state.isloading = false;
        state.orderList = [];
      })
      .addCase(getoderDetails.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getoderDetails.fulfilled, (state, action) => {
        state.isloading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getoderDetails.rejected, (state, action) => {
        state.isloading = false;
        state.orderDetails = [];
      }) 
      .addCase(updateOderStatus.rejected, (state, action) => {
        console.log(action.payload);
        
      });
  },
});

export default AdorderSlice.reducer; 
