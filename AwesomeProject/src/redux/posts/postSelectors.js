import { createSelector } from '@reduxjs/toolkit';
import { selectUserId } from '../auth/authSelectors';

export const selectPosts = state => state.posts.posts;

export const selectUserPosts = createSelector(
  [selectPosts, selectUserId],
  (posts, uid) => {
    return posts.filter(post => post.uid === uid);
  }
);
