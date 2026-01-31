import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from '../utils/baseQueryWithToken'

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Product'],
  baseQuery: baseQueryWithToken,

  endpoints: (builder) => ({
    // Fetch all products
    getProducts: builder.query({
      query: ({ page = 1 }) => `/product?page=${page}&per_page=10`,

      // make all page use the same cache key
      serializeQueryArgs: ({ endpointName }) => endpointName,

      // merge paginated data
      merge: (currentCache, newCache) => {
        currentCache.data.data.push(...newCache.data.data)
        currentCache.data.current_page = newCache.data.current_page
        currentCache.data.last_page = newCache.data.last_page
      },

      // refetch when page change
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.page !== previousArg?.page,

      
      providesTags: ['Product'],
    }),

    // Create a new product
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'admin/product',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['Product'],
    }),

    // get product by id
    getProductById: builder.query({
      query: (id) => `product/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetProductByIdQuery,
} = productApi
