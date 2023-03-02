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
      bgColor="white"
      borderRadius="md"
      w={['100%']}
    >
      <Flex p="4" alignItems="center" justify="center">
        <Text
          fontSize="xl"
          fontWeight="600"
          mt="5"
          bgGradient="linear(to-l, #373B44, #4286f4)"
          bgClip="text"
        >
          DevBoard
        </Text>
      </Flex>
      <Box
        p="4"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Button
          variant="ghost"
          mb="2"
          leftIcon={
            <FaChartLine
              color={activeRoute === '/dashboard' ? 'blue' : 'gray'}
            />
          }
          fontWeight="400"
          onClick={() => {
            handleLinkClick();
            setActiveRoute('/dashboard')
          }}
        >
          <Text pl="2">Dashboard</Text>
        </Button>
        <Button
          variant="ghost"
          mb="4"
          leftIcon={
            <FaNewspaper color={activeRoute === '/news' ? 'blue' : 'gray'} />
          }
          onClick={onSubToggle}
          // onClick={() => setActiveRoute('/news')}
          fontWeight="400"
        >
          <Text pl="2">News</Text>
        </Button>

        {/* Render the Add Post button inside a slide fade */}
        <Box>
          <SlideFade in={isSubOpen}>
            {isSubOpen && (
              <>
                <Link to="/addpost">
                <Button
                  variant="ghost"
                  mb="4"
                  leftIcon={<FaPlusSquare />}
                  onClick={handleLinkClick}
                  fontWeight="400"
                >
                  <Text pl="2">Add Post</Text>
                </Button>
                </Link>
                <Link to="/feed">
                  <Button
                    variant="ghost"
                    mb="4"
                    leftIcon={<FaRegNewspaper />}
                    onClick={handleLinkClick}
                    fontWeight="400"
                  >
                    <Text pl="2">Rss Feed</Text>
                  </Button>
                </Link>
                <Link to="/posts">
                  <Button
                    variant="ghost"
                    mb="4"
                    leftIcon={<FaRegNewspaper />}
                    onClick={handleLinkClick}
                    fontWeight="400"
                  >
                    <Text pl="2">Devboard Posts</Text>
                  </Button>
                </Link>
                <Link to="/mypost">
                  <Button
                    variant="ghost"
                    mb="4"
                    leftIcon={<FaRegNewspaper />}
                    onClick={handleLinkClick}
                    fontWeight="400"
                  >
                    <Text pl="2">My posts</Text>
                  </Button>
                </Link>
              </>
            )}
          </SlideFade>
        </Box>

        <Link to="/repositories">
          <Button
            variant="ghost"
            mb="4"
            leftIcon={
              <FaFolderOpen
                color={activeRoute === '/repositories' ? 'blue' : 'gray'}
              />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/repositories')
            }}
          >
            <Text pl="2">Your Projects</Text>
          </Button>
        </Link>
        <Link to="/stackoverflow">
          <Button
            variant="ghost"
            mb="4"
            leftIcon={
              <BsStackOverflow
                color={activeRoute === '/stackoverflow' ? 'blue' : 'gray'}
              />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/stackoverflow')
            }}
          >
            <Text pl="2">StackOverflow</Text>
          </Button>
        </Link>
        <Link to="/playground">
          <Button
            variant="ghost"
            mb="4"
            leftIcon={
              <BsStackOverflow
                color={activeRoute === '/playground' ? 'blue' : 'gray'}
              />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/playground')
            }}
          >
            <Text pl="2">Playground</Text>
          </Button>
        </Link>
        <Button
          variant="ghost"
          mb="4"
          leftIcon={
            <FaColumns color={activeRoute === '/kanban' ? 'blue' : 'gray'} />
          }
          fontWeight="400"
          onClick={() => {
            handleLinkClick();
            setActiveRoute('/kanban')
          }}
        >
          <Text pl="2">Kanban</Text>
        </Button>
        <Button
          variant="ghost"
          mb="4"
          leftIcon={
            <FaThumbsUp color={activeRoute === '/likes' ? 'blue' : 'gray'} />
          }
          fontWeight="400"
          onClick={() => {
            handleLinkClick();
            setActiveRoute('/likes')
          }}
        >
          <Text pl="2">Likes</Text>
        </Button>
        <Link to="/organizations">
          <Button
              variant="ghost"
              mb="4"
              leftIcon={
                <FaUser color={activeRoute === '/organisation' ? 'blue' : 'gray'} />
              }
              fontWeight="400"
              onClick={() => {
                handleLinkClick();
                setActiveRoute('/organization')
              }}
          >
            <Text pl="2">Organizations</Text>
          </Button>
        </Link>
        <Link to="/profile">
          <Button
            variant="ghost"
            mb="4"
            leftIcon={
              <FaUser color={activeRoute === '/profile' ? 'blue' : 'gray'} />
            }
            fontWeight="400"
            onClick={() => {
              handleLinkClick();
              setActiveRoute('/profile')
            }}
          >
            <Text pl="2">Profile</Text>
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
