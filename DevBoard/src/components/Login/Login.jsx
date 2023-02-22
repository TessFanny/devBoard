/* eslint-disable react/react-in-jsx-scope */
// Import necessary components and libraries
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { useState } from 'react'; // Importing useState hook
import { changeEmailValue, changePasswordValue, login } from '../../features/user/user'; // Importing Redux actions
import PasswordInput from './Password/Password'; // Importing a custom component
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigateto = useNavigate();
  // Use the useDispatch and useSelector hooks to access the store and dispatch actions
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.user);

  // Create state variables for email and password validation
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  // Event handler for email input change
  const handleEmailChange = (evt) => {
    dispatch(changeEmailValue(evt.target.value));
    // Dispatch the email change action to the store
    setIsEmailValid(true); // Reset the email validation state variable
  };

  // Event handler for password input change
  const handlePasswordChange = (evt) => {
    dispatch(changePasswordValue(evt.target.value));
    // Dispatch the password change action to the store
  };

  // Event handler for form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (email.trim() === '' || !email.includes('@')) {
      setIsEmailValid(false);
      // Set the email validation state variable to false if the email is not valid
      return;
    }

    if (password.trim() === '') {
      setPasswordValid(false);
      // Set the password validation state variable to false if the password is not valid
      return;
    }

    setIsEmailValid(true); // Reset the email validation state variable
    setPasswordValid(true); // Reset the password validation state variable
    dispatch(login({ email, password }));
    // Dispatch the login action to the store with the email and password as arguments
    navigateto('/');
  };

  // Render the login form using Chakra-UI components
  return (
    <FormControl isInvalid={!isEmailValid || !isPasswordValid}>
      <FormLabel>Email address</FormLabel>
      <Input
        type="email"
        placeholder="Devboarduser@email.com"
        value={email}
        onChange={handleEmailChange}
        required
      />
      {!isEmailValid && (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Password</FormLabel>
      <PasswordInput value={password} onChange={handlePasswordChange} />
      {' '}
      {/* Use a custom password input component */}
      {!isPasswordValid && (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
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
    </FormControl>
  );
}

export default Login;
