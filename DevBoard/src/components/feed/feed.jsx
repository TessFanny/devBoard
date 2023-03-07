import {Box, Flex, Text} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

const Feed = () => {
  // const { user, feed } = useSelector((state) => state.login);
  // useEffect(() => {
  //   dispatch(getUsersFeed(user.id));
  // }, [feeds]);
  const [feeds, setFeeds] = useState([]);
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const fetchData =  async () => {
      try {
          const response = await fetch(`${VITE_BACKEND_URL}/api/feeds`,

              {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`, // Bearer ACCESSTOKEN
                  },
              }
              )
          console.log(response);
      const data = await response.json();
      setFeeds(data);
      } catch(error){       
        console.error(error)
      }
    }
    useEffect(() => {fetchData()},[])

  console.log(feeds)

return (

    <Tabs>
    <TabList>
    {feeds[0] &&
      feeds.map(feed => <Tab key={feed?.title}> {feed?.title}</Tab>)}
        </TabList>
        <TabPanels>
          {feeds.map(feed =>
          <TabPanel key={feed?.title}>                                                                
            <Text>{feed?.description}</Text>
            <Link>{feed?.link}</Link>
            {feed.items.map((item) => (

                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    {item.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {new window.DOMParser()
                                .parseFromString(item.content, "text/html")
                                .documentElement.textContent}
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

  
