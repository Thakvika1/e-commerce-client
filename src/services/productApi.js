import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    headers.set('Accept', 'application/json')
    return headers
  },
})

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQuery,

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
