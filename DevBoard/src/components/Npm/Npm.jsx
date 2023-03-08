import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
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

function NpmSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchNpm = async () => {
    setLoading(true);
    const url = `https://registry.npmjs.com/-/v1/search?text=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setResults(data.objects);
    setLoading(false);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      searchNpm();
    }
  };

  return (
    <Box zIndex={1}>
      <form onSubmit={handleFormSubmit}>
        <Stack direction="row" paddingTop={5}>
          <Input
            placeholder="Search packages on NPM"
            value={query}
            onChange={handleQueryChange}
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Spinner size="sm" /> : 'Search'}
          </Button>
        </Stack>
      </form>
      {results.length > 0 && (
        <Box mt={4}>
          {results.map((result) => (
            <Box
              bgColor={'white'}
              style={{
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            >
              <Link href={result.package.links.npm}>
                <Text fontSize="xl" color="black">
                  {result.package.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {result.package.description}
                </Text>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ paddingRight: '1rem' }}>
                    {result.package.publisher.username}{' '}
                  </Text>
                  <Text color="gray.500" style={{ paddingRight: '1rem' }}>
                    {' '}
                    {`published ${result.package.version}`}{' '}
                  </Text>
                  <Text style={{ paddingRight: '1rem' }} color="gray.500">
                    {' '}
                    •{' '}
                  </Text>
                  <Text color="gray.500">
                    {` ${formatDistanceToNow(new Date(result.package.date), {
                      addSuffix: true,
                    })}`}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default NpmSearch;
