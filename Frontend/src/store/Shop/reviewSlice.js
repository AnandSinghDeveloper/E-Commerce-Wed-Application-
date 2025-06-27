import { createAsyncThunk,  createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  isloading: false,
  reviewList: [],
};


export const addReview = createAsyncThunk(
  "ReviewSlice/addReview",
  async (data) => {
    const response = await axios.post(
      `http://localhost:5000/api/shop/review/add`,
      data
    );
    return response?.data;
  }
);

export const getReviews = createAsyncThunk(
  "ReviewSlice/getReviews",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/review/${id}`
    );
    return response?.data;
  }
);



const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState,
  reducers: {},
  extraReducers: 
   (builder)=>{
    builder
    .addCase(getReviews.pending, (state) => {
      state.isloading = true;
    })
    .addCase(getReviews.fulfilled, (state, action) => {
      state.isloading = false;
      console.log(action.payload);
      
      state.reviewList = action.payload.data;
    })
    .addCase(getReviews.rejected, (state, action) => {
      state.isloading = false;
      state.reviewList = [];
    });
   
  },

})


export default ReviewSlice.reducer