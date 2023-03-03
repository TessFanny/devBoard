import {
  Text,
  useMediaQuery,
  Flex,
  Box,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editPost,
  deletePost,
  changeContentValue,
  changeTitleValue,
} from '../../features/Post/post';
import MDEditor, { commands, EditorContext } from '@uiw/react-md-editor';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Notification from '../Notification/Notification.jsx';

function PostEdit() {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');

  // Récupération du state "post" depuis le store Redux
  const { title, content } = useSelector((state) => state.post);

  // Récupération de l'ID utilisateur depuis le store Redux
  const { id } = useSelector((state) => state.login.user);
  const user_id = id;
  // Récupération de l'URL de l'API backend depuis les variables d'environnement
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Récupération de l'ID du post à éditer depuis les paramètres de l'URL
  const { postId } = useParams();

  // Initialisation du dispatcher Redux
  const dispatch = useDispatch();

  // Récupération des données du post à éditer depuis l'API backend et mise à jour du state "post" dans le store Redux
  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`${VITE_BACKEND_URL}/api/post/${postId}`);
      const data = await response.json();
      if (user_id !== data.user_id) {
        // L'utilisateur n'est pas autorisé à modifier ou supprimer le post, donc on le redirige vers la page précédente
        navigateto('/mypost');
        return;
      }
      dispatch(changeTitleValue(data.title));
      dispatch(changeContentValue(data.content));
    }
    fetchPost();
  }, [postId]);

  // Gestionnaire de changement de titre
  const handleTitleChange = (evt) => {
    dispatch(changeTitleValue(evt.target.value));
  };

  // Gestionnaire de changement de contenu
  const handleContentChange = (evt) => {
    console.log(evt);
    dispatch(changeContentValue(evt));
  };

  // Gestionnaire de soumission du formulaire d'édition de post
  const handleSubmit = () => {
    if (isLoading) return;
    setIsLoading(true);
    dispatch(editPost({ title, content, postId, user_id }));
    setTimeout(() => {
      setIsLoading(false);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 100); // Masquer la notification après 3 secondes
    }, 500);
    navigateto('/mypost');
  };

  // Gestionnaire de suppression de post
  const handleDelete = () => {
    dispatch(deletePost({ title, content, postId, user_id }));
    navigateto('/mypost');
  };

  // Initialisation du hook de navigation
  const navigateto = useNavigate();

  // Rendu du composant
  return (
    <Flex
      w={isSmallerThan1000 ? '100%' : '98%'}
      data-color-mode="light"
      minH="80%"
      mt={10}
      bgColor="gray.50"
      borderRadius="md"
      boxShadow="md"
      p="4"
    >
      <Box w="100%">
        <FormControl
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Input
            placeholder="New post title here..."
            size="lg"
            height="120px"
            textAlign="center"
            fontSize="2xl"
            boxShadow="md"
            bgColor="whitevas'y"
            value={title}
            onChange={handleTitleChange}
          />
          <MDEditor
            value={content}
            preview="edit"
            extraCommands={[commands.fullscreen]}
            onChange={handleContentChange}
            height="450px"
            style={{
              backgroundColor: 'white',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
              color: 'black',
            }}
          />

          <Button
            colorScheme="blue"
            height="60px"
            isLoading={isLoading}
            onClick={handleSubmit}
          >
            Edit !
          </Button>
          <Button
            colorScheme="red"
            height="60px"
            isLoading={isLoading}
            onClick={handleDelete}
          >
            Delete post !
          </Button>
        </FormControl>
      </Box>
      {notification && (
        <Notification
          title="Edit !"
          description="Your post have been edited !"
          status="success"
        />
      )}
    </Flex>
  );
}

export default PostEdit;
