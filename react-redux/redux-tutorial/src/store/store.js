import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        productSlice: productreducer,
    },
});