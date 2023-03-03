import {Box, Button, Flex, Heading, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import homepage from '../../assets/homepage.json';
import blob from '../../assets/blob.svg';
import blob2 from '../../assets/blobanimation.svg';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { motion } from "framer-motion"
import { useState } from 'react';


function Homepage() {

    // Homepage
    
    const [showDiv, setShowDiv] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showHomepage, setShowHomepage]= useState(true)

    const showRegister = () => {
      setShowDiv(!showDiv);
      setShowHomepage(!showHomepage);
    };

    const showLoginComponent = () => {
      setShowLogin(!showLogin);
      setShowHomepage(!showHomepage);
    };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homepage,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
      <Flex bgGradient='linear(to-r, #2e76ff, #172c69)'
            w="100%" minH="100%"
            flexDirection={['column', 'column','column', 'row']}>

        <Image  src={blob2}
                position="absolute"
                opacity="0.5"
                w={['80%', '80%', '80%', '35%']}
                left="-50"
                top="-70">
          </Image>

        <Image src={blob}
              position="fixed"
              top="-500"
              right="-710"
              opacity="0.1">
        </Image>
          {showHomepage && (
            <motion.div
                  initial={{ x:500, opacity:0 }}
                  animate={{ x:0, opacity:1 }}
                  exit={{ opacity: 0 }}
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap'}} 
                    >


        <Box w={['100%', '100%', '100%', '50%']}
              h={['50%', '50%', '50%', '100%']}
              display="flex"
              justifyContent={['center', 'center', 'center', 'flex-end']}
              alignItems="center"
              pr={['0', '0', '0', '10']}>

          <Box display="flex"
                flexDirection="column"
                w={['90%', '90%', '80%', '60%']} h="50%"
                alignItems="center"
                justifyContent={['flex-start', 'flex-start', 'flex-end', 'center']}
                mb="10">

            <Text
                fontSize="70px"
                fontWeight="700"
                bgGradient='linear(to-l, #59a3ff, #9ae9ff)'
                bgClip='text'
                mb="5">
              Devboard
            </Text>

            <Text fontSize="lg"
                  color="gray.300">
            Welcome to DevBoard, the central hub for all development needs! 
            </Text>
            <Text fontSize="lg"
                  color="gray.300">
                  Streamline your workflow and stay organized with 
                  our dashboard, designed specifically for developers. Collaborate with team members, 
                  and access key metrics and analytics 
                  all in one place.
                  Take your development to the next level with DevBoard today!"
            </Text>                         
            <Button onClick={showRegister}
                    w={['150px', '150px', '200px', '150px']}
                    mt="6" colorScheme="blue"
            >Register here
            </Button>
            <Button onClick={showLoginComponent}
                    w={['150px', '150px', '200px', '150px']}
                    mt="6" colorScheme="blue"
            >Login here
            </Button>            
          </Box>

        </Box>
        <Box  w={['100%', '100%', '100%', '50%']}
              h={['50%', '50%', '50%', '100%']}
              display="flex"
              alignItems={['flex-end', 'center', 'center']}
              justifyContent={['center', 'center', 'center', 'flex-start']}
              pl={['0', '0', '0', '10']}>

          <Lottie
              animationData={homepage}
              style={{ width: '600px', height: '100%' }}/>
         </Box>
      </motion.div>
        )}
        {showDiv && (
                <motion.div
                  initial={{ x:-500, opacity:0 }}
                  animate={{ x:0, opacity:1 }}
                  exit={{ opacity: 0 }}
                >
                  <Register />
                </motion.div>
        )} 
        {showLogin && (
                <motion.div
                  initial={{ x:-500, opacity:0 }}
                  animate={{ x:0, opacity:1 }}
                  exit={{ opacity: 0 }}
                >
                  <Login />
                </motion.div>
        )}         
      </Flex>
  );
}

export default Homepage;
