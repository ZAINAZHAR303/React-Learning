import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import counterReducer from "./slices/counterSlice"
import postReducer from "./slices/postSlice"
export const store = configureStore({
    reducer: {
        productSlice: productReducer,
        counterSlice: counterReducer,
        postSlice: postReducer,

        // Define your reducers here
    }, 
})