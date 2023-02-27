/* eslint-disable max-len */
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
  Center,
  FormErrorMessage,
  Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import {
  changeEmailValue,
  changePasswordValue,
  changeConfirmPasswordValue,
  changeUsernameValue,
  registerUser,
} from '../../features/register/register';
import { getUserGithubData } from '../../features/user/user';
// Hooks for state management
function Register() {
  const [rerender, setRerender] = useState(false);
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const navigateto = useNavigate();
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');

    if (codeParam && localStorage.getItem('accessToken') === null) {
      async function getAccessToken() {
        try {
          const response = await fetch(
            `http://tessfanny-server.eddi.cloud:8080/getAccessToken?code=${codeParam}`,
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.access_token) {
                localStorage.setItem('accessToken', data.access_token);
                setRerender(!rerender);
                getUserGithubData();
                navigateto('/');
              }
            });
        } catch (err) {
          console.error(err);
        }
      }
      getAccessToken();
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isPasswordConfirmed, setPasswordConfirmed] = useState(true);
  const [isUsernameValid, setUsernameValid] = useState(true);
  const dispatch = useDispatch();
  // Selector from store
  const {
    username, email, password, confirmPassword,
  } = useSelector(
    (state) => state.register,
  );
  // Must have an @ and a .
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   au moins une majuscule (?=.*[A-Z])
  // au moins un chiffre (?=.*[0-9])
  // au moins un caractère spécial (?=.*[!@#$%^&*])
  // une longueur minimale de 8 caractères {8,}.
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Define a switch statement to handle form validation
    switch (true) {
      // If the username field is empty, set the username validation to false and return
      case username.trim() === '':
        setUsernameValid(false);
        return;
      // If the email field is not valid according to the email regex, set the email validation to false and return
      case !emailRegex.test(email):
        setUsernameValid(true);
        setEmailValid(false);
        return;
      // If the password field is not valid according to the password regex, set the password validation to false and return
      case !passwordRegex.test(password):
        setEmailValid(true);
        setPasswordValid(false);
        return;
      // If the password and confirmPassword fields do not match, set the password confirmation validation to false and return
      case password !== confirmPassword:
        setPasswordValid(true);
        setPasswordConfirmed(false);
        return;
      // If all the validations pass, set all validation states to true, and dispatch the registerUser action with the form data
      default:
        setUsernameValid(true);
        setEmailValid(true);
        setPasswordValid(true);
        setPasswordConfirmed(true);
        dispatch(registerUser({
          username, email, password, passwordConfirm: confirmPassword,
        }));
        navigateto('/home');
    }
  };
  // Cette fonction prend deux arguments : dispatch et actionCreator
  // Elle renvoie une nouvelle fonction qui sera utilisée dans l'onChange
  // Cette nouvelle fonction prend un argument (evt) et utilise dispatch et actionCreator pour créer et envoyer une action Redux
  const handleInputChange = (dispatch, actionCreator) => (evt) => {
    dispatch(actionCreator(evt.target.value));
  };
  const HandleGitHubAuth = async () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`,
    );
  };
  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
      h="100%"
      w="35%"
    >
      <Stack spacing={8} mx="1" maxW="lg" py={12} px={6} w="100%">
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Sign up
          </Heading>
          <Text fontSize="lg" color="gray.600">
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          w="100%"
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired isInvalid={!isUsernameValid}>
              <FormLabel mx="auto">Username</FormLabel>
              {/* // Utilisation de handleInputChange pour créer une fonction de rappel onChange pour les composants d'entrée
                  // La valeur de l'entrée est extraite de l'événement et utilisée pour créer une action Redux qui est envoyée via le store */}
              <Input
                type="text"
                onChange={handleInputChange(dispatch, changeUsernameValue)}
                mr="32"
              />
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
                onChange={handleInputChange(dispatch, changeEmailValue)}
                required
              />
              {!isEmailValid && (
                <FormErrorMessage>Email is invalid.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="password" isRequired isInvalid={!isPasswordValid}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleInputChange(dispatch, changePasswordValue)}
                />
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
                <FormErrorMessage>
                  Your password must contain at least one uppercase letter, one
                  number, and one special character, and must not be empty and
                  have min 8 characters.
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              id="confirmpassword"
              isRequired
              isInvalid={!isPasswordConfirmed}
            >
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleInputChange(
                    dispatch,
                    changeConfirmPasswordValue,
                  )}
                />
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
                onClick={HandleGitHubAuth}
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
                <Link href="/login" color="blue.400">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
export default Register;
