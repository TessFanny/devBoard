import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function Post() {

    // postId,
    // title,
    // content,
    // created_at,
    // userPicturePath,
    // like,

    // const dispatch = useDispatch();
    // const token = useSelector((state) => state.token);
    // const loggedInUserId = useSelector((state) => state.user._id);
    // const isLiked = Boolean(like[loggedInUserId]);
    // const likeCount = Object.keys(like).length;
    // const { palette } = useTheme();
    // const main = palette.neutral.main;
    // const primary = palette.primary.main;  
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
            <Heading size='md'>Client Report</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
                </Text>
            </Box>
            </Stack>
        </CardBody>
        </Card>
)
}

export default Post




// const Post = ({

// }) => {

;

        

