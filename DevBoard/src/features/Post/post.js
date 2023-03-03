import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { login } from '../user/user.js';
export const deletePost = createAsyncThunk(
  'post/deletePost',
  async ({ title, content, postId, user_id }) => {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.delete(
      `${VITE_BACKEND_URL}/api/user/${user_id}/post/${postId}`,
      {
        title,
        content,
      }
    );
    console.log(response);
  }
);
export const editPost = createAsyncThunk(
  'post/editPost',
  async ({ title, content, postId, user_id }) => {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.patch(
      `${VITE_BACKEND_URL}/api/user/${user_id}/post/${postId}`,
      {
        title,
        content,
      }
    );
    console.log(response);
  }
);
export const addPost = createAsyncThunk(
  'post/addPost',
  async ({ title, content, id }) => {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    // Make a POST request to a register endpoint with email and password
    const response = await axios.post(
      `${VITE_BACKEND_URL}/api/user/${id}/post`,
      {
        title,
        content,
      }
    );
    console.log(response);
  }
);

const initialState = {
  title: '',
  content: '',
};
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changeTitleValue: (state, action) => {
      state.title = action.payload;
    },
    changeContentValue: (state, action) => {
      state.content = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Reducer for handling the pending state of the addPost request
      .addCase(addPost.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Reducer for handling the fulfilled state of the addPost request
      .addCase(addPost.fulfilled, (state) => {
        console.log('test');
        state.post = {
          title: '',
          content: '',
        };
        state.status = true;
      })
      // Reducer for handling the rejected state of the addPost request
      .addCase(addPost.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export const { changeTitleValue, changeContentValue } = postSlice.actions;

export default postSlice.reducer;
