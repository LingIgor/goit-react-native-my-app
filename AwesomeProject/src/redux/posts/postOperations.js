import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, database } from "../../firebase/config";
import { child, get, push, ref } from "firebase/database";

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ name, cords, photo, location }, { rejectWithValue, getState }) => {
    try {
      const { email, displayName } = auth.currentUser;
      const newPost = {
        email,
        name,
        cords,
        photo,
        location,
        displayName,
        created_at: Date.now(),
      };

      const docRef = await push(ref(database, "posts"), newPost);

      return {};
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

export const postsList = createAsyncThunk(
  "post/postList",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await get(child(ref(database), "posts"));
      let postList = [];

      if (snapshot.exists()) {
        snapshot.forEach((item) => {
          postList.push({
            id: item.key,
            ...item.val(),
          });
        });
      }
      return postList;
    } catch (e) {
      throw new Error(e?.message);
    }
  }
);

export const createNewComment = createAsyncThunk(
  "post/createNewComment",
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const { uid, displayName } = auth.currentUser;

      const newComment = {
        uid,
        displayName,
        comment,
        created_at: Date.now(),
      };

      await push(ref(database, `posts/${id}/comments`), newComment);

      return;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

export const commentsList = createAsyncThunk(
  "post/commentsList",
  async (id, { rejectWithValue }) => {
    try {
      const snapshot = await get(child(ref(database), `posts/${id}/comments/`));
      let commentList = [];

      if (snapshot.exists()) {
        snapshot.forEach((item) => {
          commentList.push({
            id: item.key,
            ...item.val(),
          });
        });
      }
      return commentList;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);
