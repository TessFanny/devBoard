import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Avatar} from '@chakra-ui/react'

function Post({title,content, like, date, imageuser, username}) {
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
        </Card>
)
}

export default Post




// const Post = ({

// }) => {

;

        

