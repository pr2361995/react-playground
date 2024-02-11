import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/header";
import {Body} from "/src/components/body";
import {About} from "/src/components/about";
import {Error} from "/src/components/error";
import {Contact} from "/src/components/contact";
import Footer from "/src/components/footer";
import { hooksUseMemo,hooksUseRef } from "./src/components/hooks";
import {Outlet,RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import { RestaurantMenu } from "./src/components/restaurant";
import {UserClass,UserClass2} from "./src/components/Classify/userClass"
import { Profile } from "./src/profile";

const App = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },{
                path:"/profile",
                element: <Profile></Profile>
            },{
                path : "/about",
                element : <About/>,
            },{
                path : "/contact",
                element : <Contact/>,
            },{
                path : "/restaurants/:restaurant_id",
                element : <RestaurantMenu/>,
                loader : ({request,params}) => {
                    console.log("params ",params,request);
                    return fetch("www.google.com",{
                        request : request.signal
                    })
                },
                errorElement: <Error/>
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);