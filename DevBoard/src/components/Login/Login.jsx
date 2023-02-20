import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeEmailValue, changePasswordValue, login } from '../../features/user/user';
import PasswordInput from './Password/Password';

function Login() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.user);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const handleEmailChange = (evt) => {
    dispatch(changeEmailValue(evt.target.value));
    setIsEmailValid(true);
  };

  const handlePasswordChange = (evt) => {
    dispatch(changePasswordValue(evt.target.value));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (email.trim() === '' || !email.includes('@')) {
      setIsEmailValid(false);
      return;
    }

    if (password.trim() === '') {
      setPasswordValid(false);
      return;
    }

    setIsEmailValid(true);
    setPasswordValid(true);
    dispatch(login({ email, password }));
  };

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
