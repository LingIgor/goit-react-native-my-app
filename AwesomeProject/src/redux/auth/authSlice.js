import { createSlice } from "@reduxjs/toolkit";
import { authSignUp, authSingIn, logOut } from "./authOperations";

const initialState = {
  username: null,
  email: null,
  isLoggedIn: false,
  uid: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.fulfilled, (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.isLoggedIn = true;
        state.uid = payload.uid;
      })
      .addCase(authSingIn.fulfilled, (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.isLoggedIn = true;
        state.uid = payload.uid;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.username = null;
        state.email = null;
        state.isLoggedIn = false;
        state.uid = null;
      });
  },
});

export const authReducer = authSlice.reducer;
