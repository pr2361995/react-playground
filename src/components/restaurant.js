import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import {menu} from "../utils/menu"
import { Error } from './error'

export const RestaurantMenu = () => {
    const [dishes,setdishes] = useState(null);
    const params = useParams();

    console.log("restaurant_id ", params.restaurant_id);
    useEffect(()=>{
        let items = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        fetchMenu().then(a => setdishes(items)).catch(e => setdishes(items));
    },[params.restaurant_id])

    const fetchMenu = async () => {
        const resbody = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9566871&lng=80.2481063&restaurantId="+{restaurant_id}+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await resbody.json();
        return json;
    }   
    
    if (dishes === null) return <Error/>

    return (<div className="flex flex-wrap gap-5 p-4">
            {dishes.map(dishe => {
                    return (<div key={dishe?.card?.info?.id} className='w-[300px] rounded-md p-4 border-2 border-solid border-red-100'>
                        <h1>{dishe?.card?.info?.name}</h1>
                        <div>{dishe?.card?.info?.price / 100}</div>
                        <div>{dishe?.card?.info?.description}</div>
                    </div>)
            })}
        </div>)
}
