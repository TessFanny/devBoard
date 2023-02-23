import { useState } from 'react';
import { Box, Flex, useBreakpointValue, Text } from '@chakra-ui/react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Repositories from '../repositories/repositories';

// App component
export default function App() {
  return (
    // Flex container for Sidebar and main content area
    <Flex>
      {/* Box for Sidebar */}
      <Box w="50" pr="1" bgColor="gray.200">
        <Sidebar />
      </Box>
      {/* Box for main content area */}
      <Box minH="100vh" w={`calc(100vw - 210px)`} p="5" display="flex" alignItems="center" flexDirection="column" bgColor="gray.200">
        {/* Header component */}
        <Header />
        {/* Repositories component */}
        <Repositories />
      </Box>
    </Flex>
  );
}
