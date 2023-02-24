import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { Flex, Box, Text, Image, Editable, EditablePreview, Input, EditableInput, useEditableControls, IconButton, ButtonGroup } from "@chakra-ui/react";
import { FaEdit, FaCheck, FaWindowClose } from "react-icons/fa";
import img from "../../../assets/profile.png";

function Github() {

    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps,
        } = useEditableControls()
    
        return isEditing ? (
          <ButtonGroup size='sm'>
            <IconButton icon={<FaCheck />} {...getSubmitButtonProps()} />
            <IconButton icon={<FaWindowClose />} {...getCancelButtonProps()} />
          </ButtonGroup>
        ) : (
          <Flex>
            <IconButton size='sm' icon={<FaEdit />} {...getEditButtonProps()} />
          </Flex>
        )
      }
    return(
        <Text fontSize="xl" mt="2">
          Github : 
        </Text>
    )
}

export default Github;