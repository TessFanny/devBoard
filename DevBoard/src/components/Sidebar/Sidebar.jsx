// Import React and useState hooks from the react library
import React, { useState } from 'react';

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


const Sidebar = ({ isOpen }) => {
  // Destructure the isOpen property from the useDisclosure hook
  const { isOpen: isSubOpen, onToggle: onSubToggle } = useDisclosure();

  // Create a showAddPost state variable that initially is set to false, and a function to toggle it
  const [showAddPost, setShowAddPost] = useState(false);

  // Define a function to handle the Add Post button click event
  const handleAddPostClick = () => {
    setShowAddPost(!showAddPost);
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
    >
      <Flex p="4" alignItems="center" justify="center" >
        <Text fontSize="xl" fontWeight="600" mt="5" bgGradient='linear(to-l, #373B44, #4286f4)' bgClip="text">
          DevBoard
        </Text>
      </Flex>
      <Box
        p="4"
        pl="30"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
      <Button variant="ghost" mb="2" leftIcon={<FaChartLine />} fontWeight="400" >

            <Text pl="2">Dashboard</Text>
          </Button>
          <Button
            variant="ghost"

            mb="4"
            leftIcon={<FaNewspaper />}
            onClick={onSubToggle}
            fontWeight="400"

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
                    mb="4"
                    leftIcon={<FaPlusSquare />}
                    onClick={handleAddPostClick}
                    fontWeight="400"

                  >
                    <Text pl="2">Add Post</Text>
                  </Button>
                </>
              )}
            </SlideFade>
          </Box>
          
       <Button variant="ghost" mb="4" leftIcon={<FaComments />} fontWeight="400" >
            <Text pl="2">Forum</Text>
          </Button>
          <Button variant="ghost" mb="4" leftIcon={<FaFolderOpen />} fontWeight="400" >
            <Text pl="2">Your Projects</Text>
          </Button>
          <Button variant="ghost" mb="4" leftIcon={<FaColumns />} fontWeight="400" >
            <Text pl="2">Kanban</Text>
          </Button>
          <Button variant="ghost" mb="4" leftIcon={<FaThumbsUp />}fontWeight="400" >
            <Text pl="2">Likes</Text>
          </Button>
          <Button variant="ghost" mb="4" leftIcon={<FaUser />} fontWeight="400" >
            <Text pl="2">Profile</Text>
          </Button>
      </Box>
    </Box>
  );
};

// const Layout = ({ children }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
    
//   );
// };

 export default Sidebar;
