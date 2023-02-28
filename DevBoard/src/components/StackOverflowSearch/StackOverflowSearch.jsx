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
    <Box p="4" bg="gray.100" style={{ marginTop: '2rem' }}>
      <form onSubmit={handleFormSubmit}>
        <Stack direction="row">
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
        <Stack mt="4" align="center">
          <Spinner size="lg" />
          <Text>Searching...</Text>
        </Stack>
      ) : results.length > 0 ? (
        <List mt="4">
          {results.map((result) => (
            <ListItem key={result.question_id}>
              <Link href={result.link} target="_blank" rel="noreferrer">
                {result.title}
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text mt="4">Make a research.</Text>
      )}
    </Box>
  );
}

export default StackOverflowSearch;
