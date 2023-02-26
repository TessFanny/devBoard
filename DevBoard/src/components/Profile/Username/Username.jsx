/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { Text, Input } from '@chakra-ui/react';
import { FaEdit, FaCheck, FaWindowClose } from 'react-icons/fa';
import img from '../../../assets/profile.png';

function Username() {
  const { username } = useSelector((state) => state.login.user);

  return (
    <>
      <Text pl="0" mt="10">Username</Text>
      <Input variant="filled" placeholder="Last name" mt="5" value={username} />
    </>
  );
}

export default Username;
