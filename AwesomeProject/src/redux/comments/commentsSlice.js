import { createSlice } from '@reduxjs/toolkit';
import { getAllComments } from './commentsOperations';

const initialState = {
  comments: [],
};

const handleFulfilledGetAllComments = (state, { payload }) => {
    state.comments = payload;
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllComments.fulfilled, handleFulfilledGetAllComments);
  },
});

export const commentsReducer = commentsSlice.reducer;