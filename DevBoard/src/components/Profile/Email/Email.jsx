import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { Text, Input } from "@chakra-ui/react";
import { FaEdit, FaCheck, FaWindowClose } from "react-icons/fa";
import img from "../../../assets/profile.png";

function Email() {

  const { email } = useSelector((state) => state.login.user);
    
    return(
      <>
      <Text pl="0">Email adress</Text>
      <Input variant='filled' placeholder='Email adress'  mt="5" value={email} />
      </>
    )
}

export default Email;