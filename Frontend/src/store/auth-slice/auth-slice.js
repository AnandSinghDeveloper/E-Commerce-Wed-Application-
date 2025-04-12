import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isauthenticated: false,
  isloading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",


  async (fromdata) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      fromdata,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = null;
        (state.isloading = false), (state.isauthenticated = false);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isloading = false;
        state.isauthenticated = false;
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
