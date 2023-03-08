import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useRef } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import useLocalStorage from '../Playground/useLocalStorage';
import { Box } from '@chakra-ui/react'
import uuidv4 from 'uuidv4'

function Kanban() {

    const [itemTodo, setitemTodo] = useLocalStorage('itemTodo', [
    {id: '1', content: 'coucou'},
    {id:'2', content: 'coucou2'},
    {id: '3', content: 'coucou3'},])
    const [itemInprogress, setitemInprogress] = useLocalStorage('itemInprogress', [])
    const [itemFinish, setitemFinish] = useLocalStorage('itemFinish', [])
    const todoNameRef = useRef()
    

    function handleAdd (e){
        const input = todoNameRef.current.value
        if (input==='') return;
        setitemTodo(prevtodo => {
            return [...prevtodo, {id:1, content: input}]

        })
        console.log(input)
    }


    const columnsFromBackend = 
    {
        [1]: {
            name:'Todo',
            items:itemTodo
        },
        [2]: {
            name:'InProgress',
            items:itemInprogress
        },
        [3]: {
            name:'Finish',
            items:itemFinish
        },
    };
    const [columns, setColumns] = useState(columnsFromBackend)

    const onDragEnd = (result, columns, setColumns)=>{
        if (!result.destination) return;
        const {source, destination} = result;
        if (!source.droppableId !== destination.droppableId){

            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,[source.droppableId]:{
                    ...sourceColumn, items: sourceItems
                },[destination.droppableId]:{
                    ...destColumn, items: destItems
                }
            })

        } else {
            const column = columns[source.droppableId];
            const copiedItems =[...column.items]
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0 , removed);
            setColumns({
                ...columns,
                [source.droppableId]:{
                    ...column,
                    items: copiedItems
                }
            });
        }
};

return (
    <Flex display='flex' flexDirection='column'>
        <Flex display='flex' flexDirection='flex-wrap'>
        <DragDropContext 
        key='kanban' 
        onDragEnd={result => onDragEnd(result, columns,setColumns)}        
        >

            {Object.entries(columns).map(([id, column]) => {
                return (
                    <Box style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center'
                        }}
                        key={id}>
                    <h2>
                        {column.name}
                    </h2>
                    <Box style={{margin:8}}>
                    <Droppable droppableId={id} key={id}>
                        {(provided, snapshot)=> {
                            return (
                                <Box {...provided.droppableProps} 
                                ref = {provided.innerRef} 
                                style={{
                                    background:snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                    padding:4,
                                    width:250,
                                    minHeight:500
                                    }}                                
                                >
                                {column.items.map((item, index)=> {
                                    return (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => {
                                                return (
                                                    <Box
                                                        ref={provided.innerRef}
                                                        {... provided.draggableProps}
                                                        {... provided.dragHandleProps}
                                                        style={{
                                                            userSelect:'none',
                                                            padding:16,
                                                            margin:'0 0 8px 0',
                                                            minHeight:'50px',
                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                            color:'white',
                                                            ...provided.draggableProps.style
                                                        }}
                                                        >
                                                        {item.content}
                                                    </Box>
                                                )
                                            }}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                                </Box>
                                
                            )
                        }}
                    </Droppable>
                    </Box>

                    </Box>
                )
            })}

        </DragDropContext>
        </Flex>
        <Box>
            <input type='text' />                     
            <Button size='xs' onClick={handleAdd}> Add Task </Button>
            <Button size='xs'> Clear Complete </Button>
        </Box>        
    </Flex>
    
)
}
export default Kanban