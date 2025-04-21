import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isloading: false,
  productsList: [],
  productDetails : null
};

export const fetchedFilterProducts = createAsyncThunk(
  "products/fetchedFilterProducts",

  
  

  async ({filterParmas , sortParams}) => {

    // console.log(fetchedFilterProducts);
    
              
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


export const getProductsDetails = createAsyncThunk(
  "products/getProductsDetails",
  async (id) => {            
   
    const result = await axios.get(
      `http://localhost:5000/api/shop/getProductsDetails/${id}`
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
      
        state.productsList = action.payload.data;
        state.isloading = false;
      })
      .addCase(fetchedFilterProducts.rejected, (state, action) => {
        state.isloading = false;
        state.productsList = [];
      })
      .addCase(getProductsDetails.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getProductsDetails.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.productDetails = action.payload.data;
        state.isloading = false;
      })
      .addCase(getProductsDetails.rejected, (state, action) => {
        state.isloading = false;
        state.productDetails = null;
      });
  },
});

export default shopProductSlice.reducer;
