import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from '../utils/baseQueryWithToken'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  tagTypes: ['Category'],
  baseQuery: baseQueryWithToken,

  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/category',
      providesTags: ['Category'],
    }),

    getCategoryById: builder.query({
      query: (id) => `category/${id}`,
      providesTags: (result, error, id) => [{ type: 'Category', id }],
    }),
  }),
})

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi
