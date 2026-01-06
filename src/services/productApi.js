import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
    // credentials: 'include',
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'product',
      providesTags: ['Product'],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'admin/product',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
})

export const { useGetProductsQuery, useCreateProductMutation } = productApi
