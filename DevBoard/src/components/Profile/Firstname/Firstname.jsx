import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { Text, Input } from "@chakra-ui/react";
import { FaEdit, FaCheck, FaWindowClose } from "react-icons/fa";
import img from "../../../assets/profile.png";

function Firstname() {

  const { firstname } = useSelector((state) => state.login.user);
    
    return(
      <>
      <Text pl="0">First name</Text>
      <Input variant='filled' placeholder='First name'  mt="5" />
      </>
    )
}

export default Firstname;