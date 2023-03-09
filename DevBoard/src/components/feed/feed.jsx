import {Box, Flex, Text, useMediaQuery} from '@chakra-ui/react';
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
import {getFeeds} from "../../features/user/user.js";

const Feed = () => {
    const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
    const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
    const dispatch = useDispatch();
    const { feeds } = useSelector((state) => state.login);

   useEffect(() => {
       !feeds && (
       dispatch(getFeeds()));
   }, [])

return (
    <Flex w={isSmallerThan1000 ? '100%' : '98%'}
          h="80vh"
          mt={10}
          display="flex"
          justifyContent="center"
          bgColor="bgPrimary"
          style={{'backdrop-filter': 'blur(15px)'}}
          borderRadius="md"
          boxShadow="lg"
          p={isSmallerThan500 ? "0" : "4"}
          zIndex={1}>
            <Tabs w={isSmallerThan500 ? "100%" : "90%"} color="primary" bg="bgPrimary" borderRadius="md" boxShadow="lg" p={isSmallerThan500 ? "1" : "10"} colorScheme="gray">
                <TabList mb="10" h="60px">
                    {feeds[0] &&
                        feeds.map(feed => <Tab borderTopRadius="md" fontWeight="600" fontSize={isSmallerThan500 ? "15" : "lg"} key={feed?.title}> {feed?.title}</Tab>)}
                </TabList>
                <Box w="100%" h="85%" overflowY="auto">
                    <TabPanels>
                        {feeds.map(feed =>
                            <TabPanel key={feed?.title} p="0">
                                <Text fontSize="sm">{feed?.description}</Text>
                                <Link fontSize="sm">{feed?.link}</Link>
                                {feed.items.map((item) => (

                                    <Link href={item.link}  isExternal _hover={{ textDecoration: 'none' }}>
                                        <Box w="100%"
                                             p="4"
                                             _hover={{ backgroundColor: 'secondary' }}
                                             display="flex"
                                             flexDirection="column"
                                             gap={2}
                                             mt="10px"
                                             bgColor="bgPost" borderRadius="md" boxShadow="md">
                                            <Text fontSize="12px" fontWeight="600" color="black100">{item.pubDate}</Text>
                                            <Text fontSize="md" fontWeight="600" color="black100">{item.title}</Text>
                                            <Text fontSize="sm" textAlign="end" fontWeight="600" color="black100">Creator: {item.creator}</Text>
                                        </Box>
                                    </Link>


                                ))}
                            </TabPanel>
                        )}
                    </TabPanels>
                </Box>
            </Tabs>

    </Flex>
  );
};

export default Feed

  
