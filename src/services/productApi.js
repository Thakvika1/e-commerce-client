import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from './baseQueryWithToken'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQueryWithToken,

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
