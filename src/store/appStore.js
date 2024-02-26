import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

export default store = configureStore({
    reducer : {
        cart : cartSliceReducer
    }
})