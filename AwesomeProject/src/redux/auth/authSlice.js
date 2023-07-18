import { createSlice } from "@reduxjs/toolkit";
import { authSignUp, authSingIn, logOut } from "./authOperations";

const initialState = {
  username: null,
  email: null,
  uid: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.fulfilled, (state, { payload }) => {
        state.username = payload.displayName;
        state.email = payload.email;
        state.uid = payload.uid;
        state.isLoggedIn = true;
        console.log(state.username, state.email, state.uid, state.isLoggedIn);
      })
      .addCase(authSingIn.fulfilled, (state, { payload }) => {
        state.username = payload.displayName;
        state.email = payload.email;
        state.uid = payload.uid;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.username = null;
        state.email = null;
        state.uid = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
