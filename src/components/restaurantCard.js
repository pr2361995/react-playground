import React from'react';
import { Link } from 'react-router-dom';
import {imgurl} from "../utils/url";


export const RestaurantCard = (props) => {
    const {restro} = props

    return (
        <Link key={restro.info.id} to={"/restaurants/"+restro.info.id}>
            <div className="p-4 border-2 hover:shadow-lg rounded-md bg-slate-50">
                    <div className='w-[15rem] h-[10rem] overflow-hidden rounded-md'>
                        <img className="restro" src={imgurl + restro.info.cloudinaryImageId}></img>
                    </div>
                    <div className="w-auto">
                        <div className='font-bold py-1 truncate'>{restro.info.name}</div>
                        <div className='text-gray-800'>{restro.info.areaName}</div>
                        <div className='py-1'>{restro.info.costForTwo}</div>
                        <div className='py-1'>{restro.info.avgRatingString}</div>
                    </div>
            </div>
        </Link>
    );
}

export const restaurantCardWithLabel = (RestaurantCards) => {
    return (props) => {
        // console.log("restaurantCardWithLabel",props);
        return (
            <div className='relative'>
                <label className="absolute bg-black text-white rounded-md p-2 mt-2 ml-2 text-sm">
                    free delivery 
                </label>
                <RestaurantCards {...props}></RestaurantCards>
            </div>
        )
    }
};