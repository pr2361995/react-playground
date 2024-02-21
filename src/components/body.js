import React, { useDebugValue, useEffect, useState } from "react";
import {restaurants} from "../utils/constants";
import { ShimmerUI } from "./shimmerUI";
import { RestaurantCard,restaurantCardWithLabel } from "./restaurantCard";
import { Filter } from "./filter";

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
                <Filter restroName={restroName} filerRestro={setRestroName}></Filter>
                <div className="flex flex-wrap gap-2 flex-row p-4">
                    {
                        restaurant.filter(res => res.info.name.toLocaleLowerCase().includes(restroName.toLowerCase())).map((restro,ind)=> { 
                            return ( restro.card?.loyaltyDiscoverPresentationInfo?.freedelMessage !== null ? <RestaurantCardWithLabel key={ind} restro={restro}/> : <RestaurantCard  restro={restro}/>)
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