import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  useDisclosure,
  Text,
  Button,
} from '@chakra-ui/react';
import {
  FaChartLine,
  FaNewspaper,
  FaComments,
  FaFolderOpen,
  FaColumns,
  FaThumbsUp,
  FaUser,
} from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
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
        <Button variant="ghost" mb="2" leftIcon={<FaNewspaper />}>
          News
        </Button>
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

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Sidebar isOpen={true} onClose={onClose} />
      <Box ml="64" p="4">
        {children}
      </Box>
    </>
  );
};

export default Layout;
