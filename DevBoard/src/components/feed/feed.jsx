import {Flex, Text} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import Items from './Items'


const Feed = () => {

  const [feeds, setFeeds] = useState([]);
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const fetchData =  async () => {
      try {
          const response = await fetch(`${VITE_BACKEND_URL}/api/feeds`, {
          method: "GET",
      })
      const data = await response.json();
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

    <Tabs>
    <TabList>
    {console.log(feeds)}
      {feeds.map(feed => <Tab>{feed?.title}</Tab>)}
    </TabList>
    <TabPanels>
      {feeds.map(feed => 
      <TabPanel>
        <Text>{feed?.description}</Text>
        <Text>{feed?.language}</Text>
        <Text>{feed?.link}</Text> 
        {/* {<Items items= {feed.items} />} */}
      </TabPanel>
      )}
    </TabPanels>
  </Tabs>
  );
};

export default Feed

  
