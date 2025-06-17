import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  approvalUrl: null,
  isloading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
};

export const createNewOrder = createAsyncThunk(
  "order/createNewOrder",

  async (orderdata) => {
    const response = await axios.post(
      "http://localhost:5000/api/Oder/createOrder",
      orderdata
    );
    return response?.data;
  }
);

export const capturePayment = createAsyncThunk(
  "order/capturePayment",
  async ({ paymentId, orderId, payerID }) => {
    const response = await axios.post(
      "http://localhost:5000/api/Oder/capture",
      { paymentId, orderId, payerID }
    );
    return response?.data;
  }
);

export const getAllOderByUser = createAsyncThunk(
  "order/getAllOderByUser",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:5000/api/Oder/listOder/${userId}`
    );
    return response?.data;
  }
);

export const getoderDetails = createAsyncThunk(
  "order/getoderDetails",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/Oder/details/${id}`
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
        sessionStorage.setItem(
          "orderId",
          JSON.stringify(action.payload.orderId)
        );
      })
      .addCase(createNewOrder.rejected, (state, action) => {
        state.isloading = false;
        state.approvalUrl = null;
        state.orderId = null;
      })
      .addCase(getAllOderByUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getAllOderByUser.fulfilled, (state, action) => {
        state.isloading = false;
        console.log(action.payload);
        
        state.orderList = action.payload.data;
      })
      .addCase(getAllOderByUser.rejected, (state, action) => {
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
      });
  },
});

export default OderSlice.reducer;
