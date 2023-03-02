/* eslint-disable react/react-in-jsx-scope */
import {
  Flex, Box, Image, Button, Tag, TagLabel, Avatar, Input, Icon, IconButton, Divider, Text,
} from '@chakra-ui/react';
import { FaUpload } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Firstname from './Firstname/Firstname';
import Lastname from './Lastname/Lastname';
import img from '../../assets/profile.png';
import Username from './Username/Username';
import Github from './Github/Github';
import Email from './Email/Email';
import { modifyUser } from '../../features/user/user';
import Notification from '../Notification/Notification';
import { modifyUserPicture } from '../../features/user/user';

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.login);
  const { role, image_path, id } = user;
  

  const handleFileSelect = (e) => {
    // const file = URL.createObjectURL(e.target.files[0]);
    // console.log(file);
    // dispatch(addImg(file));
    // dispatch(addImg(e.target.files));

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    console.log(id);
    dispatch(modifyUserPicture({formData, id}));
    // dispatch(addImg(U));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    dispatch(modifyUser({ user }));
    setTimeout(() => {
      setIsLoading(false);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 100); // Masquer la notification après 3 secondes
    }, 500);
  };

  return (
    <Flex w="98%" mt={['5', '5', '10']} h={['100%', '100%', '100%', '80%', '80%']}>
      <Box w="100%" display="flex" flexDirection={['column', 'column', 'column', 'row']} bgColor="white" borderRadius="md" boxShadow="md">
        <Box w={['100%', '100%', '100%', '35%', '20%']} pr={['0', '0', '0', '0', '10']}>
          <Box display="flex" flexDirection="column" alignItems={['center', 'center', 'center', 'flex-start']} p={['3','10']}>
            <Image
              maxW={['350px', '400px', '400xpx', '200px', '200px']}
              src={`http://tessfanny-server.eddi.cloud:8080/images/${image_path}`}
              fallbackSrc={img}
              borderRadius="md"
              mb="10"
            />
            <IconButton
              aria-label="Upload"
              icon={<FaUpload />}
              size="sm"
              borderRadius="md"
              bg="gray.300"
              _hover={{ bg: "gray.400" }}
              _active={{ bg: "gray.500" }}
              onClick={() => document.getElementById("fileInput").click()}
            >
            </IconButton>
            <Input
              id="fileInput"
              variant="unstyled"
              type="file"
              onChange={handleFileSelect}
              display="none"
            />
            <Divider bgColor='gray.300' h="1px" mt="3.5" mb="3.5" />
            <Text fontWeight="500" color="gray.600">Role</Text>

            {role && (
              <Tag size="lg" colorScheme="telegram" borderRadius="full" mt="5">
                <Avatar
                  bg="telegram.500"
                  size="xs"
                  ml={-1}
                  mr={2}
                />
                <TagLabel>{role}</TagLabel>
              </Tag>
            )}

            <Divider bgColor='gray.300' h="1px" mt="3.5" mb="3.5" />

            <Text fontWeight="500" color="gray.600">Organizations</Text>



          </Box>
        </Box>

        <Box w={['100%', '100%', '100%', '65%', '45%']} display="flex" pl={['0', '0', '0', '0', '100']}>
          <Box w="100%" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-start" height="100%">
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={['column', 'column', 'column', 'row', 'row']} w="100%" pl={['3', '3', '3', '0']} pr={['3', '3', '3', '10']} >
              <Box w={['100%', '100%', '100%', '47%', '47%']}>
                <Username />
                <Email />
                <Github />
              </Box>
              <Box w={['100%', '100%', '100%', '47%', '47%']}>
                <Firstname />
                <Lastname />
              </Box>
            </Box>
            <Box w="100%" display="flex" justifyContent="center" pl={['3', '3', '3', '0']} pr={['3', '3', '3', '10']} pb={['3', '3', '3', '0']}>
              <Box w="100%">
                <Button mt="10" w="100%" colorScheme="linkedin" onClick={handleSubmit} isLoading={isLoading}>Submit</Button>
              </Box>
            </Box>
            </Box>
        </Box>
      </Box>
      {notification && <Notification title="Saved !" description="Your changes have been saved" status="success" />}
    </Flex>
  );
}

export default Profile;
