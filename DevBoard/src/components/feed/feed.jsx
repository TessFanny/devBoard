import {
  Flex, Text, SimpleGrid, Card, CardHeader, CardBody,
  CardFooter, Heading, Button, IconButton, Center, Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
// import {News} from './News'

const Feed = ({ userId, isProfile = false }) => {

  const [feeds, setFeeds] = useState([]);
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const fetchData =  async () => {
      try {
          console.log("1")
          const response = await fetch(`${VITE_BACKEND_URL}/api/feeds`, {
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
            {feeds[0]?.description}
           {/* {console.log(feeds[0].items[0])} */}
          </Text>
      <ul>
        {/* {feeds[0].items.map((item, index) => ( */}
          {/* <News key={index} item={item} /> */}
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Feed