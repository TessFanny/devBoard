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
  FaRegNewspaper,
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



  // Create a showAddPost state variable that initially is set to false, and a function to toggle it
  const [showAddPost, setShowAddPost] = useState(false);

  // Define a function to handle the Add Post button click event
  const handleAddPostClick = () => {
    setShowAddPost(!showAddPost);
  };

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
        <Button
            variant="ghost"
            mb="2"
            color={activeRoute === '/profile' ? 'secondary' : 'primary'}
            leftIcon={
              <FaChartLine />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/dashboard')
            }}
        >
          <Text pl="2" color="primary" fontWeight="600">Dashboard <Badge colorScheme='purple'>v2</Badge></Text>
          
        </Button>
        <Button
          variant="ghost"
          mb="4"
          color={activeRoute === '/profile' ? 'secondary' : 'primary'}
          leftIcon={
            <FaNewspaper />
          }
          onClick={onSubToggle}
          // onClick={() => setActiveRoute('/news')}
          fontWeight="400"
        >
          <Text pl="2" textAlign="start" fontWeight="600" color="primary">News</Text>
        </Button>

        {/* Render the Add Post button inside a slide fade */}
        <Box w="1px">
          <SlideFade in={isSubOpen}>
            {isSubOpen && (
              <Box ml="15px">
                <Link to="/addpost">
                <Button
                  variant="ghost"
                  mb="4"
                  color={activeRoute === '/profile' ? 'secondary' : 'primary'}
                  leftIcon={<FaPlusSquare />}
                  onClick={handleLinkClick}
                  fontWeight="400"
                >
                  <Text pl="2" fontWeight="600" color="primary">Add Post</Text>
                </Button>
                </Link>
                <Link to="/feed">
                  <Button
                    variant="ghost"
                    mb="4"
                    color={activeRoute === '/profile' ? 'secondary' : 'primary'}
                    leftIcon={<FaRegNewspaper />}
                    onClick={handleLinkClick}
                    fontWeight="400"
                  >
                    <Text pl="2" color="primary" fontWeight="600">Rss Feed</Text>
                  </Button>
                </Link>
                <Link to="/posts">
                  <Button
                    variant="ghost"
                    mb="4"
                    color={activeRoute === '/profile' ? 'secondary' : 'primary'}
                    leftIcon={<FaRegNewspaper />}
                    onClick={handleLinkClick}
                    fontWeight="400"
                  >
                    <Text pl="2" color="primary" fontWeight="600" >Devboard Posts</Text>
                  </Button>
                </Link>
                <Link to="/mypost">
                  <Button
                    variant="ghost"
                    mb="4"
                    color={activeRoute === '/profile' ? 'secondary' : 'primary'}
                    leftIcon={<FaRegNewspaper />}
                    onClick={handleLinkClick}
                    fontWeight="400"
                  >
                    <Text pl="2" color="primary" fontWeight="600" >My posts</Text>
                  </Button>
                </Link>
              </Box>
            )}
          </SlideFade>
        </Box>

        <Link to="/repositories">
          <Button
            variant="ghost"
            mb="4"
            color={activeRoute === '/profile' ? 'secondary' : 'primary'}
            leftIcon={
              <FaFolderOpen/>
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/repositories')
            }}
          >
            <Text pl="2" color="primary" fontWeight="600">Your Projects</Text>
          </Button>
        </Link>
        <Link to="/stackoverflow">
          <Button
            variant="ghost"
            mb="4"
            color={activeRoute === '/profile' ? 'secondary' : 'primary'}
            leftIcon={
              <BsStackOverflow />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/stackoverflow')
            }}
          >
            <Text pl="2" color="primary" fontWeight="600">StackOverflow</Text>
          </Button>
        </Link>
        <Link to="/playground">
          <Button
            variant="ghost"
            mb="4"
            color={activeRoute === '/profile' ? 'secondary' : 'primary'}
            leftIcon={
              <BsStackOverflow />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/playground')
            }}
          >
            <Text pl="2" color="primary" fontWeight="600">Playground</Text>
          </Button>
        </Link>
        <Button
          variant="ghost"
          mb="4"
          color={activeRoute === '/profile' ? 'secondary' : 'primary'}
          leftIcon={
            <FaColumns />
          }
          fontWeight="400"
          onClick={() => {
            handleLinkClick();
            setActiveRoute('/kanban')
          }}
        >
          <Text pl="2" color="primary" fontWeight="600">Kanban <Badge colorScheme='purple'>v2</Badge></Text>
        </Button>
        <Link to="/likes">
        <Button
          variant="ghost"
          mb="4"
          color={activeRoute === '/profile' ? 'secondary' : 'primary'}
          leftIcon={
            <FaThumbsUp />
          }
          fontWeight="400"
          onClick={() => {
            handleLinkClick();
            setActiveRoute('/likes')
          }}
        >
          <Text pl="2" color="primary" fontWeight="600">Likes</Text>
        </Button>
        </Link>
        <Link to="/profile">
          <Button
            variant="ghost"
            mb="4"
            color={activeRoute === '/profile' ? 'secondary' : 'primary'}
            leftIcon={
              <FaUser  />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/profile')
            }}
          >
            <Text pl="2" color="primary" fontWeight="600">Profile</Text>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  setIsLoading: PropTypes.func,
};

export default Sidebar;
