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

function StackOverflowSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchStackOverflow = async () => {
    setLoading(true);
    const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.items);
    setLoading(false);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      searchStackOverflow();
    }
  };

  return (
    <Flex
      w="90%"
      minH="80%"
      mt="2rem"
      bgColor="gray.50"
      borderRadius="md"
      boxShadow="md"
      p="4"
      flexDir="column"
      align="center"
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
      {loading ? (
        <Flex justify="center" align="center" w="90%">
          <Stack align="center">
            <Spinner size="lg" />
            <Text>Searching...</Text>
          </Stack>
        </Flex>
      ) : results.length > 0 ? (
        <Box style={{ flex: '1', width: '95%', h: '75%' }}>
          <Stack spacing={2} w="95%" h="92%" overflowY="scroll">
            {results.map((result) => (
              <Box
                key={result.question_id}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                p="4"
                w="90%"
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
