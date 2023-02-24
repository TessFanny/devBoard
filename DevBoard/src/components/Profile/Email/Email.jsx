import { useDispatch, useSelector } from 'react-redux'; // Importing two hooks from Redux
import { Flex, Box, Text, Image, Editable, EditablePreview, Input, EditableInput, useEditableControls, IconButton, ButtonGroup } from "@chakra-ui/react";
import { FaEdit, FaCheck, FaWindowClose } from "react-icons/fa";
import img from "../../../assets/profile.png";

function Email() {

  const { email } = useSelector((state) => state.login.user);
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
        <Editable
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            defaultValue={email}
            fontSize='xl'
            isPreviewFocusable={false}
            mt="2"
    >
      <EditablePreview mr="2" />
      {/* Here is the custom input */}
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
    )
}

export default Email;