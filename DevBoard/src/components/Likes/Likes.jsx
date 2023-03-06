import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../posts/Post";
import {Box, Flex, useMediaQuery} from "@chakra-ui/react";
import {getLikedPosts} from "../../features/Post/post.js";

const Likes = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.login);
    const {liked_posts} = useSelector((state) => state.post);
    const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

    useEffect(() => {
        dispatch(getLikedPosts(user));

    }, []);

    return (
        <Flex w={isSmallerThan1000 ? '100%' : '98%'}
              h="80vh" mt={10}

              bgColor="gray.50"
              borderRadius="md"
              boxShadow="md" p="4" overflow="hidden">
            <Box width="100%"
                 h="100%"
                 overflowY="scroll">
                {liked_posts &&
                    liked_posts.map((post) => (
                        <Post key= {post.id}
                              postId={post.id}
                              title={post.title}
                              content ={post.content}
                              imageuser={post.image_path}
                              username={post.username}
                              date={post.date} like={post.like}
                              isLiked={true} /> ))}
            </Box>

        </Flex>
    );
};

export default Likes;