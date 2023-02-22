import React, { useState } from 'react';
import './Sidebar.scss';
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
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const { isOpen: isSubOpen, onToggle: onSubToggle } = useDisclosure();
  const [showAddPost, setShowAddPost] = useState(false);

  const handleAddPostClick = () => {
    setShowAddPost(!showAddPost);
  };

  return (
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
      <Flex p="4" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
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
        <Button variant="ghost" mb="2" leftIcon={<FaChartLine />}>
          Dashboard
        </Button>
        <Button
          variant="ghost"
          mb="2"
          leftIcon={<FaNewspaper />}
          onClick={onSubToggle}
        >
          News
        </Button>
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
                  Add Post
                </Button>
              </>
            )}
          </SlideFade>
        </Box>
        <Button variant="ghost" mb="2" leftIcon={<FaComments />}>
          Forum
        </Button>
        <Button variant="ghost" mb="2" leftIcon={<FaFolderOpen />}>
          Your projects
        </Button>
        <Button variant="ghost" mb="2" leftIcon={<FaColumns />}>
          Kanban
        </Button>
        <Button variant="ghost" mb="2" leftIcon={<FaThumbsUp />}>
          Likes
        </Button>
        <Button variant="ghost" mb="2" leftIcon={<FaUser />}>
          Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
