/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { Text, Input } from '@chakra-ui/react';
import { FaEdit, FaCheck, FaWindowClose } from 'react-icons/fa';
import img from '../../../assets/profile.png';
import { changeEmailValue } from '../../../features/user/user';

function Email() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.login.user);
  const handleEmailChange = (evt) => {
    dispatch(changeEmailValue(evt.target.value));
  };

  return (
    <>
      <Text pl="0" mt="10">
        Email address
      </Text>
      <Input
        variant="filled"
        placeholder="Email adress"
        mt="5"
        value={email}
        onChange={handleEmailChange}
      />
    </>
  );
}

export default Email;
