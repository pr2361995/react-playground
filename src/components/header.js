import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const sty = {
        width:"15%",
        aspectRatio:"3/2",
        objectFit:"contain",
        mixBlendMode:"color-burn"
    };
    return (
        <div className="flex justify-between items-center flex-row border-b-2">
            <div className="" style={sty}>
                <img className="" src="https://i.pinimg.com/564x/82/be/d4/82bed479344270067e3d2171379949b3.jpg" alt="company-logo"/>
            </div>
            <div className="">
                <ul className="flex">
                    <li className="px-4 py-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4 py-2">Profile</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;