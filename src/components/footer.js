import React from "react";

const Footer = () => {
    return (
        <div className="flex bg-white justify-between items-center flex-row border-y-2 px-4">
            <div className="">
                <img className="w-20 h-20" src="https://i.pinimg.com/564x/82/be/d4/82bed479344270067e3d2171379949b3.jpg" alt="company-logo"/>
            </div>
            <div>
                <ul className="flex gap-2">
                    <li>Whatsapp</li>
                    <li>Linkin</li>
                    <li>gmail</li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;