import {useState,useMemo,useRef,useEffect} from "react";

import {countPrimes} from "../utils/util"



export const hooksUseMemo = () => {
    const [theme,setTheme] = useState(true);
    const [val,setVal] = useState(0);
    // console.log("Rendering");
    // const prime = countPrimes(val); // state change re-rander the components
    const prime = useMemo(()=>countPrimes(val),[val]);
    // console.log("prime number"+prime);
    return (
        <div className={"flex w-56 h-56 flex-col gap-5 "+ (theme ? "bg-green-800" : "bg-red-800")}>
            <button
                onClick={()=>{return setTheme(!theme);}} 
                className={theme ? "bg-black text-white" : "bg-white text-black" }>{theme ? "light" : "dark"}</button>
            <input 
                type="number"
                value={val}
                className="border-2 px-4 py-2"
                onChange={(e)=>{setVal(e.target.value)}}></input>
        </div>
    );
}

export const hooksUseRef = () => {
    let ls = 10;
    let cs = "bg-black text-white px-4 py-2"
    const ref = useRef(11);
    const [count,setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            console.log("trigger settimeout")
        },10000)
    },[]);
    return (
        <div className={"flex w-56 h-56 flex-col gap-5 "}>
            <button
                onClick={()=>{ls = ls + 1;console.log("let count : " + ls);}} 
                className={cs}>let count increment : {ls}</button>
             <button
                onClick={()=>{setCount(count + 1);console.log("state count : " +count);}} 
                className={cs}>state count Increment : {count}</button>
             <button
                onClick={()=>{ref.current = ref.current + 1;console.log("ref : " + ref.current);}} 
                className={cs}>ref count Increment : {ref.current}</button>
           
        </div>
    );
}