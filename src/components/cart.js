import React, { useContext } from 'react'
import { CartContext } from '../context/contexts'
import {ItemCard} from "./itemCard"

export const Cart = () => {
   const { cartDetails,setDispatch} = useContext(CartContext)

  return (
    cartDetails != undefined && cartDetails.length > 0 ? (
        <div>
            <div className='flex justify-center gap-5'>
                <div className='font-bold text-2xl py-4 text-center'>
                    Cart List
                </div>
                <button className='rounded-md border-2 pl-2 hover:text-white hover:bg-rose-700 bg-rose-500 pr-4 ' onClick={()=> setDispatch({type:"ClearCart"})}>🔥 Clear Cart</button>
            </div>
            <div>
                {cartDetails.map(item => <ItemCard itemDetail={item.dish}></ItemCard>)}
            </div>
        </div>
    ) : 
        <div className='font-bold text-md py-4 text-center'>Cart is Empty</div>
  )
}
