import React from 'react'
import Item from './Item'
import {Accordion} from '@chakra-ui/react'

function Items(items) {
  return (
    <Accordion>
    {items.map( (item)=> {
        return (
            <Item item ={item}/>
        )
    })}
    </Accordion>
)
}

export default Items