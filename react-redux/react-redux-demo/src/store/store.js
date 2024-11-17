import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import counterReducer from "./slices/counterSlice"
export const store = configureStore({
    reducer: {
        productSlice: productReducer,
        counterSlice: counterReducer,
        // Define your reducers here
    }, 
})