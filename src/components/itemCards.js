
import React from 'react'
import { ItemCard } from './itemCard';

export const ItemCards = (props) => {
  const {itemDetails} = props;
  return (
        itemDetails != undefined && itemDetails.map((a,ind) => 
          <ItemCard key={ind} itemDetail={a?.card?.info}/>
        )
  )
}