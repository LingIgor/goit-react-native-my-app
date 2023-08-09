import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });

      return {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const authSingIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      return {
        displayName: user._tokenResponse.displayName,
        email: user._tokenResponse.email,
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
