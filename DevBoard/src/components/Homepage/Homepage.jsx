import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import forum from './forum.json';
import veille from './veille.json';
import github from './github.json';
import graph from './graph.json';

function Homepage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: forum,
    animationData: veille,
    animationData: github,
    animationData: graph,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Box
      bgPosition="center"
      // bgImage="url('https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,32,148,1) 35%, rgba(0,212,255,1) 100%);"
      height={{ base: '100vh', md: '80vh', lg: '100vh' }}
      width={{
        base: '100vw',
        md: '80vw',
        lg: '100vw',
        xl: '100w',
      }}
      minHeight={{ md: '100vh' }}
    >
      <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
        <Box as="span" position="absolute" overflow="hidden">
          <Flex
            p="3rem"
            alignItems="center"
            justify={{ base: 'center', md: 'start' }}
          >
            <Text
              fontSize={{ base: '2xl', md: '3rem' }}
              fontWeight="600"
              bgGradient="linear(to-l, #D3CCE3, #E9E4F0)"
              bgClip="text"
            >
              DevBoard
            </Text>
          </Flex>
        </Box>
      </Heading>
      <Box margin="0 auto" maxW="100rem" pt="10rem">
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2.25rem', lg: '3rem' }}
          mb="4"
          color="#fff"
          mt={{ base: '10rem', md: '15rem', lg: '20rem' }}
          textAlign={{ base: 'center', md: 'left' }}
          display="contents"
        >
          <Text color="gray.200" mb="5rem">
            Le tableau de bord de tous les développeurs
          </Text>
        </Heading>
        <Box display="flex" justifyContent="space-between" mb="10rem">
          <Box textAlign="center">
            <Lottie
              style={{ width: '300px', height: '300px' }}
              animationData={forum}
              loop
            />
            <Text variant="subtitle1" color="white">
              Forum
            </Text>
          </Box>
          <Box textAlign="center">
            <Lottie
              style={{ width: '300px', height: '300px' }}
              animationData={veille}
              loop
            />
            <Text variant="subtitle1" color="white">
              Veille Tech
            </Text>
          </Box>
          <Box textAlign="center">
            <Lottie
              style={{ width: '300px', height: '300px' }}
              animationData={graph}
              loop
            />
            <Text variant="subtitle1" color="white">
              Graphique
            </Text>
          </Box>
          <Box textAlign="center">
            <Lottie
              style={{ width: '300px', height: '300px' }}
              animationData={github}
              loop
            />
            <Text variant="subtitle1" color="white">
              Gestionnaire Github
            </Text>
          </Box>
        </Box>

        <Flex
          justify={{ base: 'center', md: 'start' }}
          flexDirection={{ base: 'column', md: 'row' }}
          align-items={{ base: 'center', md: 'flex-start' }}
          maxWidth={{ base: '42rem', md: 'none' }}
          marginX={{ base: 'auto', md: '0' }}
        >
          <Box
            pr={{ base: 0, md: 5 }}
            width={{ base: '100%', md: '50%' }}
            mb={{ base: '1rem', md: '0' }}
          >
            <Text
              mb="0.5rem"
              color="#fff"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Accédez à tous les outils dont vous avez besoin pour développer
              plus rapidement
            </Text>
            <Link to="/register">
              <Button
                bg="#fff"
                color="#000000"
                fontWeight="bold"
                px="2.5rem"
                py="1.5rem"
                width="full"
                border="2px solid #fff"
                rounded="md"
                _hover={{ bg: 'gray.300', textDecoration: 'none' }}
              >
                <Text>Commencer maintenant</Text>
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Homepage;
