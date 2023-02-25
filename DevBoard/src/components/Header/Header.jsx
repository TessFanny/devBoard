import { Flex, Text, Box, IconButton } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io"
import { FiLogOut } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/user/user";

function Header() {
  const navigateto = useNavigate();
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.login.user);
  const handleLogout = () => {
    dispatch(logout());
  }
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
      <Text>Dashboard</Text>
      <Box display="flex" alignItems="center" gap="2"> 
      {id ? (
        <Link to="/">
        <IconButton aria-label="Log out" icon={<FiLogOut />} onClick={handleLogout} />
        </Link>
      ) : (
        <Link to="/register">
        <Text>Sign In</Text> 
        </Link>
      )}
        <IconButton aria-label="Settings" icon={<IoMdSettings />} />
      </Box>
    </Flex>
  )
}

export default Header;
