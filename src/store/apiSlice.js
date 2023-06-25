import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
//const baseUrl = 'http://localhost:3000/';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath:"apx",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => 'products',
        }),
        getProduct: build.query({
            query: (id) => `products/${id}`,
        }),

    }),

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery, useGetAllProductsQuery } = apiSlice;
