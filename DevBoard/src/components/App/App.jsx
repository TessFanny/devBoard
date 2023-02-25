import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, Flex, useBreakpointValue, Text } from '@chakra-ui/react';
import Loader from '../Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Repositories from '../repositories/repositories';
import Profile from '../Profile/Profile';
import { useSelector } from 'react-redux';

// App component
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    // Flex container for Sidebar and main content area
    <Flex>
      {/* Box for Sidebar */}
      <Box w="50" pr="1" bgColor="gray.200">
        <Sidebar setIsLoading={setIsLoading} />
      </Box>
      {/* Box for main content area */}
      <Box minH="100vh" w={`calc(100vw - 210px)`} p="5" display="flex" alignItems="center" flexDirection="column" bgColor="gray.200">
        {/* Header component */}
        <Header />
        {/* Repositories component */}
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Box>
    </Flex>
  );
}
