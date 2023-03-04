import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import {Box, Flex, Stat, Text, useMediaQuery} from "@chakra-ui/react";
import {getUserPosts} from "../../features/user/user.js";
import {useDispatch, useSelector} from "react-redux";
import {deleteLike, getLikedPosts, getPosts, likePost} from "../../features/Post/post.js";

const Posts = () => {

    const dispatch = useDispatch();
    const { posts, liked_posts, status } = useSelector((state) => state.post);
    const { id } = useSelector((state) => state.login.user);
    const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

    useEffect(() => {
        dispatch(getLikedPosts({ id }));
        dispatch(getPosts());
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
            {liked_posts && posts ? (
                posts.map((post) => (
                    <Post key={post.id}
                          postId={post.id}
                          title={post.title}
                          content ={post.content}
                          imageuser={post.image_path}
                          username={post.username}
                          date={new Date(post.created_at).toLocaleDateString()}
                          like={post.like}
                          isLiked={liked_posts && liked_posts.some((likedPost) => likedPost.id === post.id)} />
                ))) : (
                    <Text>no post</Text>
            )}

            </Box>
        </Flex>
    );
};

export default Posts;