import {
  Text,
  useMediaQuery,
  Flex,
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editPost,
  changeContentValue,
  changeTitleValue,
} from '../../features/Post/post';
import MDEditor, { commands, EditorContext } from '@uiw/react-md-editor';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Notification from '../Notification/Notification.jsx';
function PostEdit() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
  const { title, content } = useSelector((state) => state.post);
  const { id } = useSelector((state) => state.login.user);
  const user_id = id;
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigateto = useNavigate();

  const { postId } = useParams();

  console.log(postId);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`${VITE_BACKEND_URL}/api/post/${postId}`);
      const data = await response.json();
      console.log(data);
      dispatch(changeTitleValue(data.title));
      dispatch(changeContentValue(data.content));
    }
    fetchPost();
  }, [postId]);
  const handleTitleChange = (evt) => {
    dispatch(changeTitleValue(evt.target.value));
  };

  const handleContentChange = (evt) => {
    console.log(evt);
    dispatch(changeContentValue(evt));
  };

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
      navigateto('/mypost');
    }, 500);
  };

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
