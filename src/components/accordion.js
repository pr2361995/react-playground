import React, { useEffect, useState } from 'react'
import {vegMenuList} from "../utils/menu"
import {ItemCards} from "./itemCards";

export const Accordion = (props) => {
    const [isOpen,setOpen] = useState(false);
    const categoryDeail = props.itemcate.card?.card;

    // console.log("categoryDeail",Object.entries())

    return (
        categoryDeail != undefined && <div className='divide-gray-200 bg-white cursor-pointer border-x-4 border-solid min-w-[1020px] m-auto'>
            <div onClick={()=>{setOpen(!isOpen)}} className='flex font-bold text-xl bg-whie-50 px-5 py-5 justify-between'>
                <div >{categoryDeail?.title} ( {categoryDeail["itemCards"]?.length} ) </div>
                <div>{isOpen ? "-" : "+"}</div>                       
            </div>
            <div className={isOpen ? "block" : "hidden"}>
                <ItemCards itemDetails={categoryDeail["itemCards"]}/>
            </div> 
        </div>
    )
}
