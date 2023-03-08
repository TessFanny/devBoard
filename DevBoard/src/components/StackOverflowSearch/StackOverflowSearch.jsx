import React, { useState } from 'react';
import {
  Input,
  Button,
  Stack,
  Box,
  List,
  ListItem,
  Link,
  Text,
  Spinner,
  Flex,
  SimpleGrid,
  Heading,
  Avatar,
  useMediaQuery,
} from '@chakra-ui/react';
import { TiInputChecked } from 'react-icons/ti';
// This function component is called StackOverflowSearch
function StackOverflowSearch() {
  // The state variables 'query', 'results' and 'loading' are declared using the useState hook
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobile] = useMediaQuery('(max-width: 500px)');

  // This function is used to search StackOverflow using the 'query' state variable
  const searchStackOverflow = async () => {
    setLoading(true);
    const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&intitle=${query}&site=stackoverflow&pagesize=20&filter=withbody`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // The 'results' state variable is updated with the data obtained from the search
    setResults(data.items);
    setLoading(false);
  };
  // This function is called whenever the value of the search input changes
  const handleQueryChange = (event) => {
    // The 'query' state variable is updated with the new value of the input
    setQuery(event.target.value);
  };
  // This function is called when the search form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // If the 'query' state variable is not empty, then the 'searchStackOverflow' function is called
    if (query.trim() !== '') {
      searchStackOverflow();
    }
  };
  // The component returns JSX that renders a search form and displays the search results
  return (
    <>
      <Flex
        w="98%"
        minH="80%"
        mt="10"
        bgColor="gray.50"
        borderRadius="md"
        boxShadow="md"
        p="4"
        flexDir="column"
        align="center"
        style={{'backdrop-filter': 'blur(15px)'}}
        zIndex='5'
      >
        <form
          onSubmit={handleFormSubmit}
          style={{ width: '90%', marginBottom: '2rem' }}
        >
          <Stack direction="row" align="center">
            <Input
              type="text"
              placeholder="Search Stack Overflow"
              value={query}
              onChange={handleQueryChange}
              size="lg"
              focusBorderColor="blue.500"
              _hover={{ borderColor: 'blue.500' }}
            />
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              isLoading={loading}
              loadingText="Searching"
            >
              Search
            </Button>
          </Stack>
        </form>
        {/* If the search is currently loading, a Spinner and a Text component are displayed  */}

        {loading ? (
          <Flex justify="center" align="center" w="90%">
            <Stack align="center">
              <Spinner size="lg" />
              <Text>Searching...</Text>
            </Stack>
          </Flex>
        ) : /* // If the search has returned results, they are displayed in a Box component */
        results.length > 0 ? (
          <Box
            style={{
              flex: '1',
              width: '100%',
              h: '75%',
              justifyContent: 'center',
            }}
          >
            <Stack
              display="flex"
              w="100%"
              h={{ base: 'auto', md: '92%' }}
              overflowY="scroll"
            >
              {results.map((result) => (
                <div key={result.question_id}>
                  <Link
                    href={result.link}
                    isExternal
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      boxShadow="md"
                      p={4}
                      borderRadius="md"
                      w={{ base: '85vw', md: '90vw', xl: '75vw' }}
                      h={{ base: 'auto', md: '20vh' }}
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      fontSize={mobile ? '10px' : '16px'}
                    >
                      <Flex alignItems="center">
                        <Box>
                          <Text
                            fontWeight="bold"
                            fontSize={mobile ? '10px' : 'sm'}
                            style={{
                              display: 'flex',
                              margin: '0vw',
                              padding: '2px',
                              justifyContent: 'flex-end',
                              textDecoration: 'none',
                            }}
                          >
                            {result.score} votes
                          </Text>

                          <Text
                            bgColor="green"
                            color="white"
                            fontSize={mobile ? '10px' : 'sm'}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              padding: '2px',
                              textDecoration: 'none',
                            }}
                          >
                            <TiInputChecked
                              size={30}
                              style={{ marginRight: '0.5rem' }}
                            />
                            {result.answer_count} answers
                          </Text>

                          <Text
                            fontSize={mobile ? '12px' : 'sm'}
                            style={{
                              display: 'flex',
                              margin: '0vw',
                              justifyContent: 'flex-end',
                            }}
                          >
                            {result.view_count} views
                          </Text>
                        </Box>
                        <Heading
                          fontSize={mobile ? '12px' : 'md'}
                          pl={mobile ? '10px' : { base: '0px', md: '10px' }}
                          color={'#2b97fe'}
                        >
                          {result.title}
                          <Text
                            fontSize={mobile ? '12px' : 'sm'}
                            pt={mobile ? '0px' : '2rem'}
                            style={{
                              color: 'black',
                            }}
                          >
                            {result.body
                              .replace(/<\/?p>/g, '')
                              .split('\n')
                              .slice(0, 2)
                              .join('\n')}
                            {result.body.replace(/<\/?p>/g, '').split('\n')
                              .length > 2 && '...'}
                          </Text>
                        </Heading>
                      </Flex>
                      <Box />
                      <List
                        display="flex"
                        mb={'2'}
                        ml={mobile ? '5.2rem' : { base: '1rem', md: '7.4rem' }}
                        mt={{ base: '0.5rem', md: '1rem' }}
                      >
                        {result.tags.map((tag, index) => (
                          <ListItem
                            key={index}
                            color="hsl(205,47%,42%)"
                            bgColor={'hsl(205,46%,92%)'}
                            fontSize="sm"
                            margin="5px"
                          >
                            {tag}
                          </ListItem>
                        ))}
                        <Flex
                          alignItems="center"
                          ml={{ base: '2', md: '20', lg: '40' }}
                          display={{ base: 'none', md: 'flex' }}
                          h={{ base: 'auto', md: '1rem' }}
                        >
                          <Avatar src={result.owner.profile_image} mr={2} />
                          <Text
                            fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                            mr={2}
                          >
                            By {result.owner.display_name}
                          </Text>
                          <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                            Reputation: {result.owner.reputation}
                          </Text>
                        </Flex>
                      </List>
                    </Box>
                  </Link>
                </div>
              ))}
            </Stack>
          </Box>
        ) : (
          <Flex justify="center" align="center" w="100%" mt="4">
            <Text>Make a research.</Text>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default StackOverflowSearch;
