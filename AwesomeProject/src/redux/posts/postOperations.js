import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import app from "../../../firebase/config";

const db = getFirestore(app);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (newPost, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), newPost);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      let postsList = [];
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          postsList.push({ id: doc.id, ...doc.data() });
        });
      }
      return postsList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
