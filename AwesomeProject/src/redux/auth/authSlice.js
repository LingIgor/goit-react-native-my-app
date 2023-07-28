import { createSlice } from "@reduxjs/toolkit";
import { authSignUp, authSingIn, logOut } from "./authOperations";

const initialState = {
  username: null,
  email: null,
  isLoggedIn: false,
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
      })
      .addCase(authSingIn.fulfilled, (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.username = null;
        state.email = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
