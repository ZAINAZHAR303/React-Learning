import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./slices/productSlice";
import auth from "./slices/authSlice"
export const store = configureStore({
    reducer: {
        productSlice: productreducer,
        authSlice: auth,  
    },
});