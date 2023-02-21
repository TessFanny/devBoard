// Import necessary libraries
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an asynchronous thunk for login
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async ({ username, email, password }) => {
    // Make a POST request to a login endpoint with email and password
    const response = await axios.post('http://localhost:3001/register', {
      username,
      email,
      password,
    });
  }
);

// Define the initial state of the user slice
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// Create the user slice
export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    changeUsernameValue: (state, action) => {
      state.username = action.payload;
    },
    // Reducer for changing the email value in state
    changeEmailValue: (state, action) => {
      state.email = action.payload;
    },
    // Reducer for changing the password value in state
    changePasswordValue: (state, action) => {
      state.password = action.payload;
    },
    changeConfirmPasswordValue: (state, action) => {
      state.confirmPassword = action.payload;
    },
    //   },
    //   // Define extra reducers for handling the login async thunk
    //   extraReducers: (builder) => {
    //     builder
    //       // Reducer for handling the pending state of the login request
    //       .addCase(login.pending, (state) => {
    //         state.status = 'loading';
    //         state.error = null;
    //       })
    //       // Reducer for handling the fulfilled state of the login request
    //       .addCase(login.fulfilled, (state) => {
    //         state.status = 'succeeded';
    //         state.logged = true;
    //       })
    //       // Reducer for handling the rejected state of the login request
    //       .addCase(login.rejected, (state, action) => {
    //         state.status = 'failed';
    //         state.error = action.error.message;
    //       });
  },
});

// Export the actions created by the user slice
export const {
  changeUsernameValue,
  changeEmailValue,
  changePasswordValue,
  changeConfirmPasswordValue,
} = registerSlice.actions;

// Export the reducer created by the user slice
export default registerSlice.reducer;
