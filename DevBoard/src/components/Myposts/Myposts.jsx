import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import {Box, Flex, useMediaQuery} from "@chakra-ui/react";
import {getUserPosts} from "../../features/user/user.js";

const MyPosts = () => {

    const dispatch = useDispatch();

    const { user, posts } = useSelector((state) => state.login);
    const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

    useEffect(() => {
        dispatch(getUserPosts(user));

    }, []);

    return (
        <Flex w={isSmallerThan1000 ? '100%' : '98%'}
              h="80%" mt={10}

              bgColor="gray.50"
              borderRadius="md"
              boxShadow="md" p="4" overflow="hidden">
            <Box width="100%"
                 h="100%"
                 overflowY="scroll">
                {posts &&
                    posts.map((post) => (
                    <Post key= {post.id}
                          title={post.title}
                          content ={post.content}
                          imageuser={post.image_path}
                          username={post.username}
                          date={post.date} like={post.like} /> ))}
            </Box>

        </Flex>
    );
};

export default MyPosts;