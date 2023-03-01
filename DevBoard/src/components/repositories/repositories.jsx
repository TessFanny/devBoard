/* eslint-disable react/react-in-jsx-scope */
import {
  Flex, Text, SimpleGrid, Card, CardHeader, CardBody,
  CardFooter, Heading, Button, IconButton, Center, Box, useMediaQuery, Image,
} from '@chakra-ui/react';
import { SlRefresh } from 'react-icons/sl';
import { FaGithub } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {getRepo, getUserGithubData, getUserGithubRepos} from '../../features/user/user';
import Notification from '../Notification/Notification';
import folderImg from '../../assets/folder-svgrepo-com.svg'

function Repositories() {
  const { repositories } = useSelector((state) => state.login.user);
  const { status } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const localStoragePopup = localStorage.getItem('popupDisplayed');
  const githubLogged = localStorage.getItem('accessToken');
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get('code');

  if (codeParam && localStorage.getItem('accessToken') === null) {
    async function getAccessToken() {
      try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/getAccessToken?code=${codeParam}`,
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
  const HandleGitHubAuth = async () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}`,
    );
  };

  const loadRepo = async () => {
    const repo = await getUserGithubRepos();
    dispatch(getRepo(repo));
  };

  const popup = () => {
    if (!localStoragePopup && status !== 'loading') {
      if (status === true) {
        localStorage.setItem('popupDisplayed', true);
        return (
          <Notification
            title="Successfully Connected"
            description="You are now connected !"
            status="success"
          />
        );
      }
      return (
        <Notification
          title="Oupss Error"
          description="Something went wrong... Maybe try again"
          status="error"
        />
      );
    }
  };
  return (
    // Flex container to center and add margin to the grid of Cards
    <Flex w={isSmallerThan1000 ? '100%' : '98%'} minH="80%" mt={10} bgColor="gray.50" borderRadius="md" boxShadow="md" p="4">
      {githubLogged ? (
        <>
          <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))" w="100%" h="31%">
            {repositories
            && repositories.map((repo) => (
              <Card key={repo.id} w="100%">
                <CardHeader display="flex" justifyContent="center" pb="0">
                  <Heading size="md">{repo.name}</Heading>
                </CardHeader>
                <CardBody display="flex" flexDirection="column" alignItems="center" pb="0">
                  <Image src={folderImg} boxSize="120px"></Image>
                  <Text textAlign="center" mt="5" fontSize="14px">{repo.description}</Text>
                </CardBody>
                <CardFooter display="flex" justifyContent="center">
                  <Button as="a" href={repo.html_url} target="_blank">View here</Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          <IconButton aria-label="refresh repo" icon={<SlRefresh />} onClick={loadRepo} position="fixed" right={isSmallerThan1000 ? '10px' : '50px'} />

        </>

      ) : (
        <Flex w="100%" justifyContent="center" pt="10">
          <Box w="50%" h="30%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" bgColor="white" borderRadius="md" boxShadow="md" p="4">
            <Text>
              You are not logged with GitHub,
              make sure you are connected to see your repositories.

            </Text>
            <Button
              loadingText="Submitting"
              mt="10"
              bg="gray.900"
              size="lg"
              color="white"
              leftIcon={<FaGithub />}
              _hover={{
                bg: 'black',
                border: 'transparent',
              }}
              onClick={HandleGitHubAuth}
            >
              <Center>
                <Text>Sign in with Github</Text>
              </Center>
            </Button>
          </Box>
        </Flex>
      )}
      {popup()}
    </Flex>

  );
}

export default Repositories;
