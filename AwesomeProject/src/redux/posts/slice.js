import { createSlice } from "@reduxjs/toolkit";
import { postsList } from "./postOperations";

const initialState = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postsList, (state, { payload }) => {
      state.posts = payload;
    });
  },
});

export const PostsSliceReducer = PostsSlice.reducer;
