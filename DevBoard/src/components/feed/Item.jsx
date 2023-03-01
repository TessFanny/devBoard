import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

  
const Item = (author,title, content,pubDate, link) => {

    return (
        <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {content}
          {link}
          {pubDate} - {author}
        </AccordionPanel>
      </AccordionItem>
    );
};

export default Item;