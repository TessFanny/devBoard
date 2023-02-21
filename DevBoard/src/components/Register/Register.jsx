/* eslint-disable react/react-in-jsx-scope */
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeEmailValue,
  changePasswordValue,
  changeConfirmPasswordValue,
  changeUsernameValue,
  registerUser,
} from '../../features/register/register';
// Hooks for state management
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isPasswordConfirmed, setPasswordConfirmed] = useState(true);
  const [isUsernameValid, setUsernameValid] = useState(true);
  const dispatch = useDispatch();
  // Selector from store
  const {
    username,
    email,
    password,
    confirmPassword,
  } = useSelector((state) => state.register);
  // Must have an @ and a .
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   au moins une majuscule (?=.*[A-Z])
  // au moins un chiffre (?=.*[0-9])
  // au moins un caractère spécial (?=.*[!@#$%^&*])
  // une longueur minimale de 8 caractères {8,}.
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (username.trim() === '') {
      setUsernameValid(false);
      return;
    }
    // Email muist contain something ans pass the regex
    if (!emailRegex.test(email)) {
      setEmailValid(false);
      return;
    }

    if (!passwordRegex.test(password)) {
      setPasswordValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordConfirmed(false);
      return;
    }

    setUsernameValid(true);
    setEmailValid(true);
    setPasswordValid(true);
    setPasswordConfirmed(true);

    dispatch(registerUser({ username, email, password }));
  };
  const handleUsernameChange = (evt) => {
    dispatch(changeUsernameValue(evt.target.value));
  };
  const handlePasswordChange = (evt) => {
    dispatch(changePasswordValue(evt.target.value));
  };

  const handleConfirmPasswordChange = (evt) => {
    dispatch(changeConfirmPasswordValue(evt.target.value));
  };

  const handleEmailChange = (evt) => {
    dispatch(changeEmailValue(evt.target.value));
    setEmailValid(true);
  };
  
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx="1" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Sign up
          </Heading>
          <Text fontSize="lg" color="gray.600">
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>

            <FormControl id="firstName" isRequired isInvalid={!isUsernameValid}>
              <FormLabel mx="auto">Username</FormLabel>
              <Input type="text" onChange={handleUsernameChange} mr="32" />
              {!isUsernameValid && (
              <FormErrorMessage>Username is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="email" isRequired isInvalid={!isEmailValid}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Devboarduser@email.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {!isEmailValid && (
              <FormErrorMessage>Email is invalid.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="password" isRequired isInvalid={!isPasswordValid}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={handlePasswordChange} />
                <InputRightElement h="full">
                  <Button
                    variant="ghost"
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>

                </InputRightElement>
              </InputGroup>

              {!isPasswordValid && (
              // eslint-disable-next-line max-len
              <FormErrorMessage>Your password must contain at least one uppercase letter, one number, and one special character, and must not be empty and have min 8 characters.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="confirmpassword" isRequired isInvalid={!isPasswordConfirmed}>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={handleConfirmPasswordChange} />
                <InputRightElement h="full">
                  <Button
                    variant="ghost"
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {!isPasswordConfirmed && (
              <FormErrorMessage>Password does not match.</FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                  border: 'transparent',
                }}
              >
                Sign up
              </Button>

              <Button
                loadingText="Submitting"
                bg="black"
                size="lg"
                color="white"
                leftIcon={<FaGithub />}
                _hover={{
                  bg: 'black.500',
                  border: 'transparent',
                }}
              >
                <Center>
                  <Text>Sign in with Github</Text>
                </Center>
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align="center">
                Already a user?
                {' '}
                <Link href="/" color="blue.400">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

  );
}
