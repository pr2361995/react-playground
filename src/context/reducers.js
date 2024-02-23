export const cartReducer = (state,action) => {
    switch (action.type){
        case "AddCart"    : {
            return (
                state.some(ak => ak.dish.id == action.new_item?.id) ? 
                    state.map(ak => (ak.dish.id == action.new_item?.id) ? {...ak,repeat:ak.repeat+1} : ak)
                : 
                    [...state,{dish:action.new_item,repeat:1}]
            )
        }
        case "RemoveCart" : {
            return (
                state.some(ak => ak.dish.id == action?.id && ak.repeat > 1 ) ? 
                    state.map(ak => (ak.dish.id == action?.id) ? {...ak,repeat:ak.repeat-1} : ak)
                : 
                    state.filter(ak => ak.dish.id != action.id)
            )
        }
        case "ClearCart" : {
            return []
        }
        default : throw Error("Unkown type" + action.type); 
    } 
}

