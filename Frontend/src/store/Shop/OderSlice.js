import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  approvalUrl: null,
  isloading: false,
  orderId: null,
};

export const createNewOrder = createAsyncThunk(
  "order/createNewOrder",

  async (orderdata) => {
    const response = await axios.post(
      "http://localhost:5000/api/Oder/createOrder" ,
      orderdata
    );
    return response?.data;
  }
);

const OderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isloading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isloading = false;
        state.approvalUrl = action.payload.approvalUrl;
        state.orderId = action.payload.orderId;
        state.addressList = action.payload.data;
      })
      .addCase(createNewOrder.rejected, (state, action) => {
        state.isloading = false;
        state.approvalUrl = null;
        state.orderId = null;
      });
  },
});

export default OderSlice.reducer;
