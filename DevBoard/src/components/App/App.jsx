import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Flex, useBreakpointValue, Text } from '@chakra-ui/react';
import Loader from '../Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Repositories from '../repositories/repositories';
import Register from '../Register/Register';

// App component
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    // Flex container for Sidebar and main content area
    <Register />
  );
}
// {/* <Flex>
// {/* Box for Sidebar */}
// <Box w="50" pr="1" bgColor="gray.200">
//   <Sidebar setIsLoading={setIsLoading} />
// </Box>
// {/* Box for main content area */}
// <Box minH="100vh" w={`calc(100vw - 210px)`} p="5" display="flex" alignItems="center" flexDirection="column" bgColor="gray.200">
//   {/* Header component */}
//   <Header />
//   {/* Repositories component */}
//   {isLoading ? (
//     <Loader />
//   ) : (
//     <Routes>
//       <Route path="/repositories" element={<Repositories />} />
//     </Routes>
// )}
// </Box> */}
// </Flex>