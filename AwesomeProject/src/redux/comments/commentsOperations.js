import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import {app, database} from '../../firebase/config';

// const db = getFirestore(app);

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (newComment, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(database, 'comments'), newComment);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllComments = createAsyncThunk(
  'comments/fetchAllComments',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(database, 'comments'));
      let commentsList = [];
      if (querySnapshot) {
        querySnapshot.forEach(doc => {
          commentsList.push({ id: doc.id, ...doc.data() });
        });
      }
      return commentsList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
