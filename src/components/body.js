import React, { useDebugValue, useEffect, useState } from "react";
import {restaurants} from "../utils/constants";
import { ShimmerUI } from "./shimmerUI";
import { RestaurantCard,restaurantCardWithLabel } from "./restaurantCard";

export const Body = () => {
    const [restaurant,setRestaurant] = useState([]);
    const [restroName,setRestroName] = useState("");
    
    console.log("changed the restro name");

    const fetchData = async () => {
        const swiApi = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const json = await swiApi.json();
        return json;
        // setRestroName(json)
    }
    const RestaurantCardWithLabel = restaurantCardWithLabel(RestaurantCard)
    console.log("RestaurantCardWithLabel", RestaurantCardWithLabel);
    useEffect(() => {
        fetchData().then(a => setRestaurant(restaurants.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)).catch(e => setRestaurant(restaurants.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants));
    },[])
    return (restaurant.length === 0 ?
                <div className="body-container">
                    <ShimmerUI/>
                </div>
            : <div className="body-container">
                <div>
                    <input 
                        type="text"
                        placeholder="filter"
                        className="m-4 px-4 py-2 border-2 bg-white"
                        value={restroName}
                        onChange={(e)=> setRestroName(e.target.value)}></input>
                </div>
                <div className="flex flex-wrap gap-5 flex-row p-4">
                    {
                        restaurant.filter(res => res.info.name.toLocaleLowerCase().includes(restroName.toLowerCase())).map((restro)=> { 
                            return ( restro.card?.loyaltyDiscoverPresentationInfo?.freedelMessage !== null ? <RestaurantCardWithLabel restro={restro}/> : <RestaurantCard  restro={restro}/>)
                        })
                    }
                </div>
            </div>
        );
}
// export const Body = () => {
//     return (
//         <div className="body-container">
//           <Res  
//         </div>
//     );
// }

// export default Body;