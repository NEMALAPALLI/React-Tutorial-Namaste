import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore=configureStore({
    //slices 
    reducer: {
        cart: cartReducer,
    }

}

);
export default appStore