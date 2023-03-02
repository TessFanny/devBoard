import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import {Box, Flex, useMediaQuery} from "@chakra-ui/react";

const MyPosts = (user_id) => {

//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts);    v2

// const token = useSelector((state) => state.token);   v2
    const [posts, setPosts]= useState([])
    const { user, status } = useSelector((state) => state.login);
    const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
    const getPosts = async () => {
        const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    try {
        const response = await fetch(`${VITE_BACKEND_URL}/api/user/${user.id}/posts`, {
        method: "GET"
        //   headers: { Authorization: `Bearer ${token}` },  v2
        });

        const data = await response.json();
        console.log(data)
        // dispatch(setPosts({ posts: data }));              v2
        setPosts(data)
    } catch(error) {
        console.error(error)
    }
    };

//   const getUserPosts = async () => {
//     const response = await fetch(
//       `${VITE_BACKEND_URL}/api/user/${userId}/posts`,
//       {
//         method: "GET"
//         // headers: { Authorization: `Bearer ${token}` }, 
//       }
//     );
//     const data = await response.json();
//     dispatch(setPosts({ posts: data }));
//   };                                                 v2

    useEffect(() => {getPosts(); }, []);

    return (
        <Flex w={isSmallerThan1000 ? '100%' : '98%'}
              h="80%" mt={10}

              bgColor="gray.50"
              borderRadius="md"
              boxShadow="md" p="4" overflow="hidden">
            <Box width="100%"
                 h="100%"
                 overflowY="scroll">
                {posts.map((post) => (
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