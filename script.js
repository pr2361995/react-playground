import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (<h1>learning react</h1>);

const Tittle = (props) => {
    console.log(props);
    return <><h1>I learned React JS</h1><span> {props.name} </span><span> {props.children}</span></>;
};

console.log(Heading);

const HeaderComponent = () => {
    return (<div className="heading">
                {Heading}
                {Tittle({children: "prasanth",name:"byteally"})}
                <Tittle name="prodapt">priya</Tittle>
            </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent></HeaderComponent>);