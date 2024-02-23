import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Error } from './error'
import { Accordion } from './accordion';
import { vegMenuList } from '../utils/menu';

export const MenuCard = () => {
    const [itemcategorys,setTtemcategorys] = useState([]);
    const [isOpen,setOpen] = useState(0);
    const params = useParams();


    useEffect(()=>{
        const cards = vegMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        fetchMenu().then(a => setTtemcategorys(cards)).catch(e => setTtemcategorys(cards));
    },[params.restaurant_id])

    const fetchMenu = async () => {
        const resbody = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9566871&lng=80.2481063&restaurantId="+{restaurant_id}+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await resbody.json();
        return json;
    }   
    console.log("itemcategorys ", itemcategorys);
    
    if (itemcategorys == []) return <Error/>
    
    return (
            <div className="flex flex-wrap flex-col gap-5 bg-slate-100">
                {itemcategorys.map((itemcategory,index) => <Accordion key={index} openStatus={{isOpen,setOpen,index}} itemcate={itemcategory}/>)}
            </div>
        )
}
