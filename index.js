import React,{createContext, useContext, useReducer, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/header";
import {Body} from "/src/components/body";
import {About} from "/src/components/about";
import {Error} from "/src/components/error";
import {Contact} from "/src/components/contact";
// import Footer from "/src/components/footer";
import { hooksUseMemo,hooksUseRef } from "./src/components/hooks";
import {Outlet,RouterProvider, Routes} from "react-router";
import {createBrowserRouter,BrowserRouter} from "react-router-dom";
import { MenuCard } from "./src/components/menuCard";
import {UserClass,UserClass2} from "./src/components/Classify/userClass"
import { Profile } from "./src/profile";
import {Cart} from "./src/components/cart"
import { CartContext } from "./src/context/cart";
import cartReducer from "./src/context/cartReducer"
import {DemoForm} from "./src/components/demo"

const App = () => {
    const cartDetails = useContext(CartContext);
    const [state,setDispatch] = useReducer(cartReducer,cartDetails);
    return (
        <CartContext.Provider value={{cartDetails:state,setDispatch}}>
            <div className="app">
                <Header></Header>
                <Outlet/>
            </div>
        </CartContext.Provider>
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
                element: <Profile/>
            },{
                path:"/cart",
                element: <Cart/>
            },{
                path : "/about",
                element : <About/>,
            },{
                path : "/contact",
                element : <Contact/>,
            }
            ,{
                path : "/demo",
                element : <DemoForm/>,
            }
            ,{
                path : "/restaurants/:restaurant_id",
                element : <MenuCard/>,
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