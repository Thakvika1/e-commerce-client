import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from '../utils/baseQueryWithToken'

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Product'],
  baseQuery: baseQueryWithToken,

  endpoints: (builder) => ({
    // Fetch all products
    getProducts: builder.query({
      query: () => 'product',
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
