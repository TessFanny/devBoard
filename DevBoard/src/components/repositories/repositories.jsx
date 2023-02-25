import { Flex, Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Button, position, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { SlRefresh } from 'react-icons/sl'
import { useDispatch, useSelector } from "react-redux";
import { getRepo, getUserGithubRepos } from "../../features/user/user";
import Notification from '../Notification/Notification';

function Repositories() {
  const { repositories } = useSelector((state) => state.login.user);
  const { status } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const localStoragePopup = localStorage.getItem('popupDisplayed');

  const loadRepo = async () => {
    const repo = await getUserGithubRepos();
    dispatch(getRepo(repo));
  }

  const popup = () => {
    if(!localStoragePopup && status !== "loading") {
      if(status === true) {
        localStorage.setItem("popupDisplayed", true);
        return <Notification
          title="Successfully Connected"
          description="You are now connected !"
          status="success"/>
      } else {
        return <Notification
          title="Oupss Error"
          description="Something went wrong... Maybe try again"
          status="error"
         />
      }
    }
  }
  return (
    // Flex container to center and add margin to the grid of Cards
    <Flex w="98%" mt={10}>
      {/* Grid of Cards with 4 columns and responsive width */}
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' w='100%'>
        {repositories && 
          repositories.map((repo) => (
            <Card key={repo.id}>
          <CardHeader>
            <Heading size='md'>{repo.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{repo.description}</Text>
          </CardBody>
          <CardFooter>
            <Button as="a" href={repo.html_url} target="_blank">View here</Button>
          </CardFooter>
        </Card>
          ))
        }

      </SimpleGrid>
      <IconButton aria-label='refresh repo' icon={<SlRefresh />} onClick={loadRepo} />
      {popup()}
     </Flex>

  );
}

export default Repositories;
