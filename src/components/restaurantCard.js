import React from'react';
import { Link } from 'react-router-dom';
import {imgurl} from "../utils/url";


export const RestaurantCard = (props) => {
    const sty = {
        aspectRatio:"3/2",
        objectFit:"contain",
        mixBlendMode:"color-burn"
    };

    const {restro} = props

    return (
        <Link key={restro.info.id} to={"/restaurants/"+restro.info.id}>
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
        </Link>
    );
}

export const restaurantCardWithLabel = (RestaurantCards) => {
    return (props) => {
        // console.log("restaurantCardWithLabel",props);
        return (
            <div className='relative'>
                <label className="absolute">
                    free delivery 
                </label>
                <RestaurantCards {...props}></RestaurantCards>
            </div>
        )
    }
};