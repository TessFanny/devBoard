import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './Post';
import { Box, Flex, useMediaQuery, IconButton } from '@chakra-ui/react';
import { getUserPosts } from '../../features/user/user.js';
import { FaEdit } from 'react-icons/fa';
const MyPosts = () => {
  const dispatch = useDispatch();

  const { user, posts } = useSelector((state) => state.login);
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

  useEffect(() => {
    dispatch(getUserPosts(user));
  }, [posts]);

  return (
    <Flex
      w={isSmallerThan1000 ? '100%' : '98%'}
      h="80%"
      mt={10}
      bgColor="gray.50"
      borderRadius="md"
      boxShadow="md"
      p="4"
      overflow="hidden"
    >
      <Box width="100%" h="100%" overflowY="scroll">
        {posts && posts.length > 0 ? (
          posts.map((post) => (

                  <Post
                    title={post.title}
                    content={post.content}
                    imageuser={post.image_path}
                    username={post.username}
                    date={new Date(post.created_at).toLocaleDateString()} // format date
                    like={post.like}
                    postId={post.id}
                  />

          ))
        ) : (
          // Si l'utilisateur n'a pas publié de posts, affiche un message d'erreur
          <div>Aucun post à afficher pour l'instant.</div>
        )}
      </Box>
    </Flex>
  );
};

export default MyPosts;
