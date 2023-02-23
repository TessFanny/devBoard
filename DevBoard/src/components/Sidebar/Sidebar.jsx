// Import React and useState hooks from the react library
import React, { useState } from 'react';

// Import the Sidebar.scss stylesheet
import './Sidebar.scss';

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
} from 'react-icons/fa';

// Create a functional component called Sidebar and pass in a prop called isOpen
const Sidebar = ({ isOpen }) => {
  // Destructure the isOpen property from the useDisclosure hook
  const { isOpen: isSubOpen, onToggle: onSubToggle } = useDisclosure();

  // Create a showAddPost state variable that initially is set to false, and a function to toggle it
  const [showAddPost, setShowAddPost] = useState(false);

  // Define a function to handle the Add Post button click event
  const handleAddPostClick = () => {
    setShowAddPost(!showAddPost);
  };

  // Render the Sidebar component
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        bg="gray.200"
        w="64"
        h="full"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        transition="ease-in-out .2s"
        transform={isOpen ? 'translateX(0)' : '-translateX(100%)'}
      >
        {/* Render the header  */}
        <Flex p="4" alignItems="center" justify={'center'}>
          <Text fontSize="xl" fontWeight="bold">
            DevBoard
          </Text>
        </Flex>

        {/* Render the menu items */}
        <Box
          p="4"
          pl="30"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Button variant="ghost" mb="2" leftIcon={<FaChartLine />}>
            <Text pl="2">Dashboard</Text>
          </Button>
          <Button
            variant="ghost"
            mb="2"
            leftIcon={<FaNewspaper />}
            onClick={onSubToggle}
          >
            <Text pl="2">News</Text>
          </Button>

          {/* Render the Add Post button inside a slide fade */}
          <Box>
            <SlideFade in={isSubOpen}>
              {isSubOpen && (
                <>
                  <Button
                    variant="ghost"
                    mb="2"
                    leftIcon={<FaPlusSquare />}
                    onClick={handleAddPostClick}
                  >
                    <Text pl="2">Add Post</Text>
                  </Button>
                </>
              )}
            </SlideFade>
          </Box>

          <Button variant="ghost" mb="2" leftIcon={<FaComments />}>
            <Text pl="2">Forum</Text>
          </Button>
          <Button variant="ghost" mb="2" leftIcon={<FaFolderOpen />}>
            <Text pl="2">Your Projects</Text>
          </Button>
          <Button variant="ghost" mb="2" leftIcon={<FaColumns />}>
            <Text pl="2">Kanban</Text>
          </Button>
          <Button variant="ghost" mb="2" leftIcon={<FaThumbsUp />}>
            <Text pl="2">Likes</Text>
          </Button>
          <Button variant="ghost" mb="2" leftIcon={<FaUser />}>
            <Text pl="2">Profile</Text>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

// Export the Sidebar component
export default Sidebar;
