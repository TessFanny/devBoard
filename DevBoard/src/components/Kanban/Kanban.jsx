import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column.jsx';
// import DarkModeIconButton from './components/DarkModeIconButton';
// import { ColumnType } from './utils/enums';
import { Button, Flex } from '@chakra-ui/react';
// import React from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { useState, useRef } from 'react';
// import { Button, Flex } from '@chakra-ui/react';
// import useLocalStorage from '../Playground/useLocalStorage';
// import { Box } from '@chakra-ui/react'
import {useMediaQuery} from '@chakra-ui/react';
// import { useId } from 'react';
// import { v4 as uuid } from 'uuid';

// function Kanban() {

//     const [itemTodo, setitemTodo] = useLocalStorage('itemTodo', [])
//     const [itemInprogress, setitemInprogress] = useLocalStorage('itemInprogress', [])
//     const [itemFinish, setitemFinish] = useLocalStorage('itemFinish', [])

//     const todoNameRef = useRef()

function Kanban() {

    const ColumnType = {
        TO_DO: 'Todo',
        IN_PROGRESS: 'In Progress',
        BLOCKED: 'Blocked',
        COMPLETED: 'Completed'
        };

    const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)');
    const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');




  return (
    <Flex w={isSmallerThan1000 ? '100%' : '98%'}
    h="80vh"
    mt={10}
    flexDirection="column"
    gap={5}
    bgColor="bgPrimary"
    style={{'backdrop-filter': 'blur(15px)'}}
    borderRadius="md"
    boxShadow="lg"
    p="4"
    zIndex={1}
    display='flex' >
        <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={4}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </Container>
      </DndProvider>
      </Flex>
  );
}

export default Kanban;     


















