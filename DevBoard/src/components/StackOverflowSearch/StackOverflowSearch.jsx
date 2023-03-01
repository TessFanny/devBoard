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
} from '@chakra-ui/react';
// This function component is called StackOverflowSearch
function StackOverflowSearch() {
  // The state variables 'query', 'results' and 'loading' are declared using the useState hook
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  // This function is used to search StackOverflow using the 'query' state variable
  const searchStackOverflow = async () => {
    setLoading(true);
    const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`;
    const response = await fetch(url);
    const data = await response.json();
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
    >
      {/* /* This is the search form / */}
      <form
        onSubmit={handleFormSubmit}
        style={{ width: '90%', marginBottom: '2rem' }}
      >
        {/* {/ The search input and submit button are wrapped in a Stack /} */}
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
/* // If the search has returned results, they are displayed in a Box component */
      ) : results.length > 0 ? (
        <Box style={{ flex: '1', width: '100%', h: '75%' }}>
          <Stack display="flex" w="100%" h="92%" overflowY="scroll">

            {results.map((result) => (
              <Box
                key={result.question_id}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                p="4"
                w="100%"
              >
                <Link href={result.link} target="_blank" rel="noreferrer">
                  <Heading size="md">{result.title}</Heading>
                </Link>
              </Box>
            ))}
          </Stack>
        </Box>
      ) : (
        <Flex justify="center" align="center" w="100%" mt="4">
          <Text>Make a research.</Text>
        </Flex>
      )}
    </Flex>
  );
}

export default StackOverflowSearch;
