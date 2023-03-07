import React, {useState} from 'react'
import {Card, CardHeader, CardBody, CardFooter, IconButton} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Avatar} from '@chakra-ui/react'
import {BiLike} from "react-icons/bi";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {deleteLike, likePost} from "../../features/Post/post.js";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';

Post.propTypes = {
        postId: PropTypes.number,
        title: PropTypes.string,
        content:PropTypes.string,
        like: PropTypes.number,
        date: PropTypes.instanceOf(Date),
        imageuser:PropTypes.string,
        username:PropTypes.string,
        isLiked: PropTypes.bool,
    };

function Post({postId, title, content, like, date, imageuser, username, isLiked }) {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const {id} = useSelector((state) => state.login.user)
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(isLiked)
    const [count, setCount] = useState(like);
    const handleLikeClick = () => {
        setLiked(!liked);
        if(!liked) {
            const newCount = count +1;
            setCount(newCount)
            dispatch(likePost({id, postId}));
        } else {
            const newCount = count -1;
            setCount(newCount);
            dispatch(deleteLike({id, postId}));
        }
    };

    return (
        
        <Card mb="5" boxShadow="md">
            <CardHeader w="100%" pb="0">
                <Box display="flex" alignItems="center" w="100%" mb="3">
                    <Avatar name={username} src={`${VITE_BACKEND_URL}/images/${imageuser}`}/>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                        <Text fontSize="sm" ml="3">{username}</Text>
                        <Text fontSize="sm" ml="3">{date} </Text>
                    </Box>

                </Box>

                <Heading size='md'>{title}</Heading>
            </CardHeader>
            <CardBody pt="0">
                {/* <Stack divider={<StackDivider />} spacing='4'> */}
                <Box>
                <Text pt='2' fontSize='sm'>
                    <div> <ReactMarkdown children={content} className="react-markdown-test" remarkPlugins={[remarkGfm]} />
                    </div>
                </Text>
                    
                </Box>
                <Box mt="10" display="flex" alignItems="center">
                    <IconButton bg="none" border="none" style={{outline: 'none'}} aria-label='like' icon={<BiLike color={liked ? "#4284EF" : "gray"} />} onClick={handleLikeClick} />
                    <Text ml="2">{count}</Text>
                </Box>

            </CardBody>

        </Card>
)
}

export default Post;

        

