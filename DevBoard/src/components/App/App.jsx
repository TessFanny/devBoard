/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Loader from '../Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Repositories from '../repositories/repositories';
import Profile from '../Profile/Profile';
import Feed from '../feed/feed';
import Homepage from '../Homepage/Homepage';
import StackOverflowSearch from '../StackOverflowSearch/StackOverflowSearch';
import Playground from '../Playground/playground.jsx';
import Organizations from '../Organizations/Organizations.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Posts from '../posts/Posts';
import MyPosts from '../Myposts/Myposts';

// App component
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Check if user is logged in

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    if (
      !token &&
      location.pathname !== '/login' &&
      location.pathname !== '/register' &&
      location.pathname !== '/homepage'
    ) {
      window.location.replace('/login');
    }
  }, []);

  // Redirect user to register page if not logged in and not on login or homepage routes

  // Hide Sidebar and Header components for /register and /login routes
  const isRegisterOrLoginRouteOrHome =
    location.pathname === '/register' ||
    location.pathname === '/login' ||
    location.pathname === '/homepage';

  const isHomepage = location.pathname === '/homepage';

  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

  const sidebar =
    isRegisterOrLoginRouteOrHome || isSmallerThan1000 ? null : (
      <Box w="50" pr="1" bgColor="gray.200">
        <Sidebar setIsLoading={setIsLoading} />
      </Box>
    );
  const header = isRegisterOrLoginRouteOrHome ? null : <Header />;

  return (
    // Flex container for Sidebar and main content area
    <Flex>
      {sidebar}
      {/* Box for main content area */}
      <Box
        minH="100vh"
        w={
          isRegisterOrLoginRouteOrHome || isSmallerThan1000
            ? '100vw'
            : 'calc(100vw - 210px)'
        }
        p={isHomepage || isSmallerThan1000 ? '' : '5'}
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
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/posts" element={<MyPosts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/stackoverflow" element={<StackOverflowSearch />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/organizations" element={<Organizations />} />
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
