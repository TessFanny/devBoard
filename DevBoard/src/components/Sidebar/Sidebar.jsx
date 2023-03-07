// Import React and useState hooks from the react library
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import various Chakra-UI components, as well as a few React icons
import {
  Box,
  Flex,
  Spacer,
  useDisclosure,
  Text,
  Button,
  Slide,
  SlideFade,
} from '@chakra-ui/react';
import {
  FaChartLine,
  FaNewspaper,
  FaComments,
  FaFolderOpen,
  FaColumns,
  FaThumbsUp,
  FaUser,
  FaPlusSquare,
  FaRegNewspaper, FaCode,
} from 'react-icons/fa';
import { BsStackOverflow } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@chakra-ui/react'

const Sidebar = ({ isOpen, setIsLoading }) => {
  // Destructure the isOpen property from the useDisclosure hook
  const { isOpen: isSubOpen, onToggle: onSubToggle } = useDisclosure();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  const handleLinkClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Box
      h="full"
      boxShadow="base"
      overflowY="auto"
      transition="ease-in-out .2s"
      transform={isOpen ? 'translateX(0)' : '-translateX(100%)'}
      bgColor="bgPrimary"
      style={{'backdrop-filter': 'blur(15px)'}}
      zIndex={1}
      borderRadius="lg"
      w={['100%']}
    >
      <Flex p="4" alignItems="center" justify="center">
        <Text
          fontSize="30px"
          fontWeight="700"
          mt="5"
          color="primary"
        >
          DevBoard
        </Text>
      </Flex>
      <Box
          w="100%"
          p="4"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
      >
          <Box
              _hover={{backgroundColor: "bgSecondary"}}
              mb="5px"
              pl="4"
              display="flex"
              alignItems="center"
              w="100%"
              h="50px"
              borderRadius="md"

              onClick={() => {
                handleLinkClick();
                setActiveRoute('/dashboard')
              }}
              color={activeRoute === '/dashboard' ? 'secondary' : 'primary'}
              bgColor={activeRoute === '/dashboard' ? 'bgPrimary' : ''}>
              <Flex justifyContent="space-around" alignItems="center">
                  <FaChartLine />
                  <Text pl="4" color="primary" fontWeight="600">Dashboard <Badge colorScheme='purple'>v2</Badge></Text>
              </Flex>

          </Box>

          <Box
              _hover={{backgroundColor: "bgSecondary"}}
              mb="5px"
              cursor="pointer"
              pl="4"
              display="flex"
              alignItems="center"
              w="100%"
              h="50px"
              borderRadius="md"
              color="primary"
              onClick={onSubToggle}>
              <Flex justifyContent="space-around" alignItems="center">
                <FaNewspaper />
                <Text pl="4" color="primary" fontWeight="600">News</Text>
              </Flex>
          </Box>

        {/* Render the Add Post button inside a slide fade */}
        <Box w="220px">
          <SlideFade in={isSubOpen}>
            {isSubOpen && (
              <Box>

                  <Link to="/addpost" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
                      <Box
                          _hover={{backgroundColor: "bgSecondary"}}
                          pl="8"
                          display="flex"
                          alignItems="center"
                          w="100%"
                          h="50px"
                          borderRadius="md"

                          onClick={() => {
                              handleLinkClick();
                              setActiveRoute('/addpost')
                          }}
                          color={activeRoute === '/addpost' ? 'secondary' : 'primary'}
                          bgColor={activeRoute === '/addpost' ? 'bgPrimary' : ''}>
                          <Flex justifyContent="space-around" alignItems="center">
                              <FaPlusSquare />
                              <Text pl="4" color="primary" fontWeight="600">Add Post</Text>
                          </Flex>
                      </Box>
                  </Link>

                  <Link to="/feed" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
                      <Box
                          _hover={{backgroundColor: "bgSecondary"}}
                          pl="8"
                          display="flex"
                          alignItems="center"
                          w="100%"
                          h="50px"
                          borderRadius="md"

                          onClick={() => {
                              handleLinkClick();
                              setActiveRoute('/feed')
                          }}
                          color={activeRoute === '/feed' ? 'secondary' : 'primary'}
                          bgColor={activeRoute === '/feed' ? 'bgPrimary' : ''}>
                          <Flex justifyContent="space-around" alignItems="center">
                              <FaRegNewspaper />
                              <Text pl="4" color="primary" fontWeight="600">RSS Feed</Text>
                          </Flex>
                      </Box>
                  </Link>

                  <Link to="/posts" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
                      <Box
                          _hover={{backgroundColor: "bgSecondary"}}
                          pl="8"
                          display="flex"
                          alignItems="center"
                          w="100%"
                          h="50px"
                          borderRadius="md"

                          onClick={() => {
                              handleLinkClick();
                              setActiveRoute('/posts')
                          }}
                          color={activeRoute === '/posts' ? 'secondary' : 'primary'}
                          bgColor={activeRoute === '/posts' ? 'bgPrimary' : ''}>
                          <Flex justifyContent="space-around" alignItems="center">
                              <FaRegNewspaper />
                              <Text pl="4" color="primary" fontWeight="600">DevBoard Posts</Text>
                          </Flex>
                      </Box>
                  </Link>

                  <Link to="/mypost" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
                      <Box
                          _hover={{backgroundColor: "bgSecondary"}}
                          pl="8"
                          display="flex"
                          alignItems="center"
                          w="100%"
                          h="50px"
                          borderRadius="md"

                          onClick={() => {
                              handleLinkClick();
                              setActiveRoute('/mypost')
                          }}
                          color={activeRoute === '/mypost' ? 'secondary' : 'primary'}
                          bgColor={activeRoute === '/mypost' ? 'bgPrimary' : ''}>
                          <Flex justifyContent="space-around" alignItems="center">
                              <FaRegNewspaper />
                              <Text pl="4" color="primary" fontWeight="600">My posts</Text>
                          </Flex>
                      </Box>
                  </Link>

              </Box>
            )}
          </SlideFade>
        </Box>

        <Link to="/repositories" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
          <Box
              _hover={{backgroundColor: "bgSecondary"}}
              pl="4"
              display="flex"
              alignItems="center"
              w="100%"
              h="50px"
              borderRadius="md"

              onClick={() => {
                handleLinkClick();
                setActiveRoute('/repositories')
              }}
              color={activeRoute === '/repositories' ? 'secondary' : 'primary'}
              bgColor={activeRoute === '/repositories' ? 'bgPrimary' : ''}>
              <Flex justifyContent="space-around" alignItems="center">
                <FaFolderOpen />
                <Text pl="4" color="primary" fontWeight="600">Your Projects</Text>
              </Flex>
          </Box>
        </Link>

        <Link to="/stackoverflow" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
          <Box
              _hover={{backgroundColor: "bgSecondary"}}
              pl="4"
              display="flex"
              alignItems="center"
              w="100%"
              h="50px"
              borderRadius="md"

              onClick={() => {
                handleLinkClick();
                setActiveRoute('/stackoverflow')
              }}
              color={activeRoute === '/stackoverflow' ? 'secondary' : 'primary'}
              bgColor={activeRoute === '/stackoverflow' ? 'bgPrimary' : ''}>
              <Flex justifyContent="space-around" alignItems="center">
                  <BsStackOverflow />
                  <Text pl="4" color="primary" fontWeight="600">Stackoverflow</Text>
              </Flex>
          </Box>
        </Link>

        <Link to="/playground" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
          <Box
              _hover={{backgroundColor: "bgSecondary"}}
              pl="4"
              display="flex"
              alignItems="center"
              w="100%"
              h="50px"
              borderRadius="md"

              onClick={() => {
                handleLinkClick();
                setActiveRoute('/playground')
              }}
              color={activeRoute === '/playground' ? 'secondary' : 'primary'}
              bgColor={activeRoute === '/playground' ? 'bgPrimary' : ''}>
              <Flex justifyContent="space-around" alignItems="center">
                <FaCode />
                <Text pl="4" color="primary" fontWeight="600">Playground</Text>
              </Flex>
          </Box>
        </Link>

         <Box
              _hover={{backgroundColor: "bgSecondary"}}
              pl="4"
              display="flex"
              alignItems="center"
              w="100%"
              h="50px"
              mb="5px"
              borderRadius="md"
              cursor="pointer"
              onClick={() => {
                handleLinkClick();
                setActiveRoute('/kanban')
              }}
              color={activeRoute === '/kanban' ? 'secondary' : 'primary'}
              bgColor={activeRoute === '/kanban' ? 'bgPrimary' : ''}>
             <Flex justifyContent="space-around" alignItems="center">
                <FaColumns />
               <Text pl="2" color="primary" fontWeight="600">Kanban <Badge colorScheme='purple'>v2</Badge></Text>
             </Flex>
          </Box>

        <Link to="/likes" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
          <Box
              _hover={{backgroundColor: "bgSecondary"}}
              pl="4"
              display="flex"
              alignItems="center"
              w="100%"
              h="50px"
              borderRadius="md"

              onClick={() => {
                handleLinkClick();
                setActiveRoute('/likes')
              }}
              color={activeRoute === '/likes' ? 'secondary' : 'primary'}
              bgColor={activeRoute === '/likes' ? 'bgPrimary' : ''}>
              <Flex justifyContent="space-around" alignItems="center">
                <FaThumbsUp />
                <Text pl="4" color="primary" fontWeight="600">Likes</Text>
              </Flex>
          </Box>
        </Link>

        <Link to="/profile" style={{width: "100%", height: "50px", marginBottom: "5px"}}>
          <Box
              _hover={{backgroundColor: "bgSecondary"}}
              pl="4"
               display="flex"
               alignItems="center"
               w="100%"
               h="50px"
               borderRadius="md"

               onClick={() => {
                 handleLinkClick();
                 setActiveRoute('/profile')
               }}
               color={activeRoute === '/profile' ? 'secondary' : 'primary'}
               bgColor={activeRoute === '/profile' ? 'bgPrimary' : ''}>
              <Flex justifyContent="space-around" alignItems="center">
                  <FaUser />
                <Text pl="4" color="primary" fontWeight="600">Profile</Text>
              </Flex>
          </Box>
        </Link>


      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  setIsLoading: PropTypes.func,
};

export default Sidebar;
