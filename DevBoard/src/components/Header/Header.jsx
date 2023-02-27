/* eslint-disable react/react-in-jsx-scope */
import {
  Flex,
  Text,
  Box,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
} from '@chakra-ui/react';
import { FaUser, FaUserEdit } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '../../features/user/user';
import { useLocation } from 'react-router-dom';
import RouteInfo from './RouteInfo/Routeinfo';
function Header() {
  const navigateto = useNavigate();
  const dispatch = useDispatch();
  const { id, username } = useSelector((state) => state.login.user);

  const handleLogout = () => {
    dispatch(logout());
  };
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Flex
      h="10%" // Sets the height of the header
      w="98%" // Sets the width of the header
      p="4" // Sets the padding of the header
      pr="10" // Sets the right padding of the header
      pl="10" // Sets the left padding of the header
      bgColor="white" // Sets the background color of the header
      alignItems="center" // Sets the vertical alignment of the header's children
      justifyContent="space-between" // Sets the horizontal alignment of the header's children
      boxShadow="base"
      borderRadius="md"
    >
      <RouteInfo />
      <Box display="flex" alignItems="center" gap="2">
        {id ? (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={
                <>
                  <Text pr="0.5rem">{username}</Text> <FaUser />
                </>
              }
              onClick={handleButtonClick}
              p="1rem"
            />
            <MenuList>
              <Link to="/profile">
                <MenuItem icon={<FaUserEdit />}>Profile</MenuItem>
              </Link>
              <Link to="/">
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
