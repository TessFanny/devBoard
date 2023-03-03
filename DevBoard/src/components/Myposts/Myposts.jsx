import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { Box, Flex, useMediaQuery, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaEdit, FaHeart } from 'react-icons/fa';

const MyPosts = (user_id) => {
  const [posts, setPosts] = useState([]); // Déclare un état pour stocker les posts de l'utilisateur
  const { user } = useSelector((state) => state.login); // Récupère l'utilisateur actuellement connecté
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)'); // Utilise un hook de Chakra UI pour détecter la taille de l'écran

  // Définit une fonction asynchrone pour récupérer les posts de l'utilisateur
  const getPosts = async () => {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL; // Récupère l'URL du backend à partir de la variable d'environnement

    try {
      const response = await fetch(
        `${VITE_BACKEND_URL}/api/user/${user.id}/posts`,
        {
          method: 'GET',
        }
      );

      const data = await response.json(); // Récupère les données sous forme de JSON
      setPosts(data); // Met à jour l'état des posts avec les données récupérées
    } catch (error) {
      console.error(error);
    }
  };
  // Utilise le hook useEffect pour appeler la fonction getPosts une fois que le composant est monté
  useEffect(() => {
    getPosts();
  }, []);

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
            <div key={post.id}>
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Post
                    title={post.title}
                    content={post.content}
                    imageuser={post.image_path}
                    username={post.username}
                    date={post.date}
                    like={post.like}
                  />
                  {user.id === post.user_id && (
                    <Link to={`/editpost/${post.id}`}>
                      <IconButton icon={<FaEdit />} aria-label="Edit" />
                    </Link>
                  )}
                </Box>
              </Flex>
            </div>
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
