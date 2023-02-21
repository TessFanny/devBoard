// Import the `configureStore` function from the `@reduxjs/toolkit` library
import { configureStore } from '@reduxjs/toolkit';

// Import the `userReducer` from the `../features/user/user` file
import userReducer from '../features/user/user';
import registerReducer from '../features/register/register'

// Use `configureStore` to create a Redux store,
// passing in the `userReducer` as the reducer for the `user` slice
const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
  },
});

// Export the created store so that it can be used in the app
export default store;
