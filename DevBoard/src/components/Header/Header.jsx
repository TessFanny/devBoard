/* eslint-disable react/react-in-jsx-scope */
import {
  Flex,
  Text,
  Box,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Menu, useMediaQuery,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, } from '@chakra-ui/react'
import { FaUserEdit } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '../../features/user/user';
import { useLocation } from 'react-router-dom';
import RouteInfo from './RouteInfo/Routeinfo';
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
function Header() {
  const dispatch = useDispatch();
  const { id, username,image_path } = useSelector((state) => state.login.user);
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

  const handleLogout = () => {
    dispatch(logout());
    window.location.replace('/homepage');
  };
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <Flex
      h="10vh" // Sets the height of the header
      w={isSmallerThan1000 ? '100%' : '98%'} // Sets the width of the header
      p="4" // Sets the padding of the header
      pr="10" // Sets the right padding of the header
      pl="10" // Sets the left padding of the header
      bgColor="white" // Sets the background color of the header
      alignItems="center" // Sets the vertical alignment of the header's children
      justifyContent="space-between" // Sets the horizontal alignment of the header's children
      boxShadow="base"
      borderRadius="md"
    >
      <Box display="flex" alignItems="center" gap="2">
      {isSmallerThan1000 && (
          <BurgerMenu />
      )}
      <RouteInfo />
      </Box>
      <Box display="flex" alignItems="center" gap="2">
        {id ? (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={
                <>
                  <Text pr="0.5rem">{username}</Text> 
                  <Avatar name={username} size='sm' src={`${VITE_BACKEND_URL}/images/${image_path}`}>  
                    <AvatarBadge boxSize='1.25em' bg='green.500' /> 
                  </Avatar>
                </>
              }
              onClick={handleButtonClick}
              p="1rem"
            />
            <MenuList>
              <Link to="/profile">
                <MenuItem icon={<FaUserEdit />}>Profile</MenuItem>
              </Link>
              <Link to="/homepage">
                <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
                  Log out
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        ) : (
          <Link to="/register">
            <Text>Sign In</Text>
          </Link>
        )}
        <IconButton aria-label="Settings" icon={<IoMdSettings />} />
      </Box>
    </Flex>
  );
}

export default Header;
