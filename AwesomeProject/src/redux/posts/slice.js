import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./postOperations";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
    });
  },
});

export const postsReducer = postsSlice.reducer;
