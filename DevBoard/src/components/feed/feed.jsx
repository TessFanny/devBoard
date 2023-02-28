import {
  Flex, Text, SimpleGrid, Card, CardHeader, CardBody,
  CardFooter, Heading, Button, IconButton, Center, Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
// import {News} from './News'

const Feed = ({ userId, isProfile = false }) => {

  const [feeds, setFeeds] = useState([]);

  const fetchData =  async () => {
      try {
          const response = await fetch(`http://localhost:3000/api/feeds`, {
          method: "GET",
      })
      const data = await response.json();
      console.log(data)
      setFeeds(data);
      } catch(error){       
        console.error(error)
      }
    }
    useEffect(() => {fetchData()},[])

// useEffect(() => {
//     if (token) {
//       getUsergetFeeds();
//       getFeeds();
//     } else {
//       getFeeds();
//     }
//   }, []);

return (
    <div>
          <Text fontSize="lg" color="gray.600">
                Feed from {feeds[0]?.title}
          </Text>
          <Text>
            {/* {feeds[0].description} */}
           {console.log(feeds[0].items[0])}
          </Text>
      <ul>
        {feeds[0].items.map((item, index) => (
          {/* <News key={index} item={item} /> */}
        ))}
      </ul>
    </div>
  );
};

export default Feed