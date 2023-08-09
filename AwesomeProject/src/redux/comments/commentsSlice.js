import { createSlice } from "@reduxjs/toolkit";
import { getAllComments } from "./commentsOperations";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllComments.fulfilled, (state, { payload }) => {
      state.comments = payload;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
