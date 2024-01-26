import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/header";
import {Body} from "/src/components/body";
import Footer from "/src/components/footer";
import { hooksUseMemo,hooksUseRef } from "./src/components/hooks";

const App = () => {
    return (
        <div className="app">
            {/* header */}
            <Header></Header>
            {/* body */}
            {/* {RestroComponent({company:"Star Biriyani",rating:4.5,location:"Velachery"})} */}
            <Body/>
            {/* footer */}
            <Footer></Footer>
            {/* demo  code*/}
            {hooksUseMemo()}
            {hooksUseRef()}
            </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>);