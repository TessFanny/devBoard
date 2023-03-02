import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Avatar} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'

function Post({title,content, like, date, imageuser, username}) {
    
    const [isLoading, setIsLoading] = useState(false);
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
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    // const dispatch = useDispatch();
    // const token = useSelector((state) => state.token);
    // const loggedInUserId = useSelector((state) => state.user._id);

    // const patchLike = async () => {
    //   const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
    //     method: "PATCH",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ userId: loggedInUserId }),
    //   });
    //   const updatedPost = await response.json();
    //   dispatch(setPost({ post: updatedPost }))

    return (
    <Card>
        <CardHeader>
            <Heading size='md'>{title}</Heading>
        </CardHeader>
        <Avatar name={username} src={`${VITE_BACKEND_URL}/images/${imageuser}`}/>
        <CardBody>
            {/* <Stack divider={<StackDivider />} spacing='4'> */}
            <Box>
                <Text pt='2' fontSize='sm'>
                {content}
                </Text>
            </Box>
            <Text>Date : {date} </Text>
            Like: {like}
            <Text>author: {username} </Text>
            </CardBody>
            <ButtonGroup>
                <Button mt="10" w="100%" colorScheme="red" onClick={handleSubmit} isLoading={isLoading}>Delete</Button>
                <Button mt="10" w="100%" colorScheme="orange" onClick={handleSubmit} isLoading={isLoading}>Update</Button>
            </ButtonGroup>
            
        </Card>
)
}

export default Post




// const Post = ({

// }) => {

;

        

