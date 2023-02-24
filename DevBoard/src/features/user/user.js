// Import necessary libraries
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an asynchronous thunk for login
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    // Make a POST request to a login endpoint with email and password
    const response = await axios.post('http://tessfanny-server.eddi.cloud:8080/login', {
      email,
      password,
    });
    const { token, newUser } = response.data;
    // Store the received token in local storage
    localStorage.setItem('token', token);
    return { newUser };
  },
);

// Define the initial state of the user slice
const initialState = {
  user: {
    email: "",
    password: "",
  },
};

// Create the user slice
export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer for changing the email value in state
    changeEmailValue: (state, action) => {
      state.user.email = action.payload;
    },
    // Reducer for changing the password value in state
    changePasswordValue: (state, action) => {
      state.user.password = action.payload;
    },
    // Reducer for logging out the user
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  // Define extra reducers for handling the login async thunk
  extraReducers: (builder) => {
    builder
      // Reducer for handling the pending state of the login request
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Reducer for handling the fulfilled state of the login request
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.newUser;
        state.status = true;
      })
      // Reducer for handling the rejected state of the login request
      .addCase(login.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });

  },
});

// Export the actions created by the user slice
export const {
  changeEmailValue,
  changePasswordValue,
  logout,
} = loginSlice.actions;

// Export the reducer created by the user slice
export default loginSlice.reducer;
