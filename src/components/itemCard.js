import React ,{useContext, useState} from 'react';
import { CartContext } from '../context/contexts';
import { useDispatch, useSelector } from 'react-redux';
import { addCart,removeCart } from '../store/cartSlice';

export const ItemCard = ({itemDetail}) => {
    // const {cartDetails,setDispatch} = useContext(CartContext);
    const cartDetails = useSelector(store => store.cart);
    const dispatch = useDispatch();
    
    return (
        <div className='mx-4 mt-2 p-4 rounded-md bg-white my-4 flex justify-between drop-shadow-sm hover:drop-shadow-md'>
            <div className=''>
                <div className=''>{itemDetail?.isVeg == 1 ? "Veg" : "Non-veg"}</div>
                <div className='font-bold'>{itemDetail?.name}</div>
                <div className='pt-2'>{itemDetail?.price / 100}</div>
                {/* <button onClick={()=>{}} className='bg-green-500 text-black rounded-lg px-2 py-1 '>Item Details</button> */}
                <div className='text-stone-400 py-2'>{itemDetail?.description}</div>
            </div>
            <div className='relative'>
                <img src='./' className='w-[118px] h-[96px] bg-red-50 rounded-md'></img>            
                {
                    cartDetails?.filter(item => item != undefined && item.dish.id == itemDetail.id).reduce((acc,cu) => acc + cu.repeat,0) > 0 ?
                        <div className='border-gray-200 border-2 justify-around text-black flex py-1 absolute inset-x-1.5 bottom-1 bg-white'> 
                            <div 
                                onClick={() => dispatch(removeCart(itemDetail.id))}
                                className='cursor-pointer text-red-500'
                            >
                                ➖
                            </div>

                            <label>{cartDetails?.filter(item => item != undefined && item.dish.id == itemDetail.id).reduce((acc,cu) => acc + cu.repeat,0)}</label>
                            
                            <div 
                                onClick={()=>dispatch(addCart(itemDetail))} 
                                className='cursor-pointer text-emerald-500'
                            >
                                ➕
                            </div>
                        </div>
                    :
                        <button 
                            className='absolute left-[1.5rem] top-[4.5rem] bg-rose-500 text-white rounded-md hover:bg-rose-700 px-3 py-2 ' 
                            onClick={() => dispatch(addCart(itemDetail))}
                        >
                            + Add
                        </button>
                }
                
            </div>
        </div>
    )
}


