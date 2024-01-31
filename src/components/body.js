import React, { useDebugValue, useEffect, useState } from "react";
import {restaurants} from "../utils/constants";
import {imgurl} from "../utils/url";
import { ShimmerUI } from "./shimmerUI";
import { Link } from "react-router-dom";

export const Body = () => {
    const [restaurant,setRestaurant] = useState([]);
    const [restroName,setRestroName] = useState("");
    
    console.log("changed the restro name");

    const sty = {
        aspectRatio:"3/2",
        objectFit:"contain",
        mixBlendMode:"color-burn"
    };
    const fetchData = async () => {
        const swiApi = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const json = await swiApi.json();
        return json;
        // setRestroName(json)
    }
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
                            return (<Link key={restro.info.id} to={"/restaurants/"+restro.info.id}>
                                        <div className="w-96 p-4 border-2 hover:shadow-lg">
                                                <div style={sty}>
                                                    <img className="restro" src={imgurl + restro.info.cloudinaryImageId}></img>
                                                </div>
                                                <div className="w-auto">
                                                    <div>{restro.info.name}</div>
                                                    <div>{restro.info.areaName}</div>
                                                    <div>{restro.info.costForTwo}</div>
                                                    <div>{restro.info.avgRatingString}</div>
                                                </div>
                                        </div>
                                    </Link>)
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