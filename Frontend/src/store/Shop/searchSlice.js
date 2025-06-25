import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  searchList: [],
};

export const getSearchResult = createAsyncThunk(
  "search/getSearchResult",
  async (keyword) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/search/${keyword}`
    );
    return response?.data;
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    reSetSearchList: (state) => {
      state.searchList = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResult.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getSearchResult.fulfilled, (state, action) => {
        state.isloading = false;
        state.searchList = action.payload.data;
      })
      .addCase(getSearchResult.rejected, (state, action) => {
        state.isloading = false;
        state.searchList = [];
      });
  },
});

export const { reSetSearchList } = searchSlice.actions;

export default searchSlice.reducer;
