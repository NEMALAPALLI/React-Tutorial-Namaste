import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutate the state here
            state.items.push(action.payload)

        },
        //remove items
        removeItem:(state,action)=>{
            state.items.pop();
        },
        //when we reuqire action we can use or we can ignore
        clearCart:(state)=>{
            state.items.length=0; //empty array-[]
        }
    }

})
//export the actions and reducers
export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
