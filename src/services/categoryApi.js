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
    })
  })
})

export const { useGetCategoriesQuery } = categoryApi
