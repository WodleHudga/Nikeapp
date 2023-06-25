import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import {ProductSlice} from "./ProductSlice";
import {cartSlice} from "./cartSlice";
import {apiSlice} from "./apiSlice";

export const store = configureStore({
    reducer: {
        products : ProductSlice.reducer,
        cart: cartSlice.reducer,
        apx: apiSlice.reducer,



    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
//export default Index;