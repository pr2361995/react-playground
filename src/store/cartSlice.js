import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart" ,
    initialState : [] ,
    reducers : {
        addCart : (state,action) => {
            if (state.some(a => a.dish.id == action.payload.id))
                return [...state].map(a => a.dish.id == action.payload.id ? {dish:a.dish,repeat:a.repeat+ 1}  : a)
            else 
                return [...state,{dish:action.payload,repeat:1}]
        },
        removeCart : (state,action) => {
            return (
                state.some(ak => ak.dish.id == action.payload && ak.repeat > 1 ) ? 
                    [...state].map(ak => (ak.dish.id == action.payload) ? {...ak,repeat:ak.repeat-1} : ak)
                : 
                    [...state].filter(ak => ak.dish.id != action.payload)
            )
        },
        clearCart : () => {
            return []
        }
    }
});
export default cartSlice.reducer;
export const {addCart,removeCart,clearCart} = cartSlice.actions;
