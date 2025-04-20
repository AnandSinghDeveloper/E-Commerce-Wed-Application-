import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isauthenticated: false,
  isloading: true,
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

export const loginUser = createAsyncThunk(
  "/auth/login",

  async (fromdata) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      fromdata,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);
export const Authcheck = createAsyncThunk(
  "/auth/check-auth",

  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/auth/check-auth",
      {
        withCredentials: true,
        headers: {
          "cache-control":
            "no-cache, no-store, must-revalidate,proxy-revalidate",

          Expires: "0",
        },
      }
    );

    return response.data;
  }
);

export const logout = createAsyncThunk(
  "/auth/logout",

  async () => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
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
      })
      .addCase(loginUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        (state.isloading = false),
          (state.isauthenticated = action.payload.success ? true : false);
       
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isloading = false;
        state.isauthenticated = false;
        state.user = null;
      })
      .addCase(Authcheck.pending, (state) => {
        state.isloading = true;
       // console.log(action);
        
      })
      .addCase(Authcheck.fulfilled, (state, action) => {
        state.user = action.payload.user;
        (state.isloading = false),
          (state.isauthenticated = action.payload.success ? true : false);
        // console.log(action);
      })
      .addCase(Authcheck.rejected, (state, action) => {
        state.isloading = false;
        state.isauthenticated = false;
        state.user = null;
        console.log(action);
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.isloading = false,
        state.isauthenticated = false
       
      })

  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
