import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { Text, Input } from "@chakra-ui/react";
import { FaEdit, FaCheck, FaWindowClose } from "react-icons/fa";
import img from "../../../assets/profile.png";

function Lastname() {

  const { lastname } = useSelector((state) => state.login.user);
    
    return(
      <>
      <Text pl="0" mt="10">Last name</Text>
      <Input variant='filled' placeholder='Last name'  mt="5" value={lastname}/>
      </>
    )
}

export default Lastname;