import {Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import Item from './Item'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

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
    console.log(feeds)

return (

    <Tabs>
    <TabList>
    {feeds &&
      feeds.map(feed => <Tab>{feed?.title}</Tab>)}
        </TabList>
        <TabPanels>
          {feeds.map(feed =>
          <TabPanel>
            <Text>{feed?.description}</Text>
            <Text>{feed?.language}</Text>
            <Text>{feed?.link}</Text>
            {feed.items.map((item) => (

                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    {item.title}
                                </Box>

                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {item.content}
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>


            ))}
          </TabPanel>
          )}
        </TabPanels>
    </Tabs>
  );
};

export default Feed

  
 {/* <AccordionItem>
                                  <h2>
                                    <AccordionButton>
                                      <Box as="span" flex='1' textAlign='left'>
                                        {item.title}
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel pb={4}>
                                    {item.content}
                                    {item.link}
                                    {item.pubDate} - {item?.author}
                                  </AccordionPanel>
                                </AccordionItem>  */}