/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  Box, Flex, useBreakpointValue, Text,
} from '@chakra-ui/react';
import Loader from '../Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Repositories from '../repositories/repositories';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import Feed from '../feed/feed'
import { useDispatch, useSelector } from "react-redux";

// App component
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const isAuth = Boolean(useSelector((state) => state.token));

  // Hide Sidebar and Header components for /register and /login routes
  const isRegisterOrLoginRouteOrHomeOrHome = location.pathname === '/register' || location.pathname === '/login' || location.pathname === '/home';
  const sidebar = isRegisterOrLoginRouteOrHomeOrHome ? null : (
    <Box w="50" pr="1" bgColor="gray.200">
      <Sidebar setIsLoading={setIsLoading} />
    </Box>
  );
  const header = isRegisterOrLoginRouteOrHomeOrHome ? null : <Header />;

  return (
    // Flex container for Sidebar and main content area
    <Flex>
      {sidebar}
      {/* Box for main content area */}
      <Box
        minH="100vh"
        w={isRegisterOrLoginRouteOrHomeOrHome ? '100vw' : 'calc(100vw - 210px)'}
        p="5"
        display="flex"
        alignItems="center"
        flexDirection="column"
        bgColor="gray.200"
      >
        {header}
        {/* Repositories component */}
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/repositories" element={<Repositories/>} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        )}
      </Box>
    </Flex>
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