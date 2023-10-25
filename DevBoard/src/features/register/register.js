// Import necessary libraries
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define an asynchronous thunk for register
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async ({ username, email, password, passwordConfirm }, thunkAPI) => {
    try {
      const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    // Make a POST request to a register endpoint with email and password
    const response = await axios.post(`${VITE_BACKEND_URL}/api/register`, {
      username,
      email,
      password,
      passwordConfirm,
    });
    console.log(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    
  }
);

// Define the initial state of the user slice
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isRegisterSuccess: false
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
      },
      // Define extra reducers for handling the register async thunk
      extraReducers: (builder) => {
        builder
          // Reducer for handling the pending state of the register request
          .addCase(registerUser.pending, (state) => {
            state.status = 'loading';
            state.error = null;
          })
          // Reducer for handling the fulfilled state of the register request
          .addCase(registerUser.fulfilled, (state) => {
            state.status = 'succeeded';
            state.password = null;
            state.isRegisterSuccess = true
            toast.success(`Your account has been  succesfully registered`)
          })
          // Reducer for handling the rejected state of the register request
          .addCase(registerUser.rejected, (state, {payload}) => {
            //state.status = 'failed';
            //state.error = action.error.message;
            toast.error(payload)
          });
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
