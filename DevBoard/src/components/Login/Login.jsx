// Import various components and hooks from external libraries and files
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeEmailValue, changePasswordValue, login, logout,
} from '../../features/user/user';
import PasswordInput from './Password/Password';

// Define a functional component called `Login`
function Login() {
  // Retrieve the `dispatch` function and the `email` and `password` values from the Redux store
  const dispatch = useDispatch();
  const { email, password, logged } = useSelector((state) => state.user);

  // Define two callback functions to update the `email` and `password`
  // values in the Redux store in response to changes to the corresponding input fields
  const handleEmailChange = (evt) => {
    dispatch(changeEmailValue(evt.target.value));
  };

  const handlePasswordChange = (evt) => {
    dispatch(changePasswordValue(evt.target.value));
  };

  // Define a callback function to handle the form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Dispatch the `login` action with the current `email` and `password` values
    dispatch(login({ email, password }));
  };

  const handleSubmitLogout = (evt) => {
    evt.preventDefault();
    // Dispatch the `login` action with the current `email` and `password` values
    dispatch(logout());
  };

  // Return a form element with several input fields, buttons, and labels,
  // as well as the `PasswordInput` component (which is not shown here)
  return (
    <FormControl>
      <FormLabel>Email address </FormLabel>
      <Input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} required />
      <FormLabel>Password</FormLabel>
      <PasswordInput value={password} onChange={handlePasswordChange} />
      <Button
        mt={4}
        colorScheme="blue"
        type="submit"
        width="300px"
        display="flex"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {logged && (
      <Button
        mt={4}
        colorScheme="blue"
        type="submit"
        width="300px"
        display="flex"
        onClick={handleSubmitLogout}
      >
        Logout
      </Button>
      )}
    </FormControl>
  );
}

// Export the `Login` component so that it can be used elsewhere in the app
export default Login;
