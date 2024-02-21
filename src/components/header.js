import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";
const Header = () => {
    const {cartDetails} = useContext(CartContext);

    return (
        <div className="flex bg-rose-400 justify-between items-center flex-row border-b-2 px-4">
            <div className="">
                <Link to="/">
                    <img className="w-20 h-20" src="https://i.pinimg.com/564x/82/be/d4/82bed479344270067e3d2171379949b3.jpg" alt="company-logo"/>
                </Link>
            </div>
            <div className="">
                <ul className="flex">
                    <li className="px-4 py-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/cart">Cart ( {cartDetails?.reduce((acc,cu) => acc + cu.repeat,0) } - items )</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4 py-2">
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;