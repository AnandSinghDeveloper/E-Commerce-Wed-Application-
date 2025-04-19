import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  productsList: [],
};

export const fetchedFilterProducts = createAsyncThunk(
  "products/fetchedFilterProducts",

  
  

  async ({filterParmas , sortParams}) => {

    console.log(fetchedFilterProducts);
    
              
    const query= new URLSearchParams({
      ...filterParmas,
      sortby : sortParams
    });

    const result = await axios.get(
      `http://localhost:5000/api/shop/getfilterProducts?${query}`
    );

    return result?.data;
  }
);

 const shopProductSlice = createSlice({
  name: "shopProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedFilterProducts.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchedFilterProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.productsList = action.payload.data;
        state.isloading = false;
      })
      .addCase(fetchedFilterProducts.rejected, (state, action) => {
        state.isloading = false;
        state.productsList = [];
      });
  },
});

export default shopProductSlice.reducer;
