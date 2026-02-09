import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from '../utils/baseQueryWithToken'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['User'],
  baseQuery: baseQueryWithToken,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: 'register',
        method: 'POST',
        body: userData,
      }),
    }),

    loginUser: builder.mutation({
      query: (userData) => ({
        url: 'login',
        method: 'POST',
        body: userData,
      }),
    }),

    editUser: builder.mutation({
      query: (userData) => ({
        url: 'edit-profile',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),

    getAuthUser: builder.query({
      query: () => 'user',
      providesTags: ['User'],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useEditUserMutation,
  useGetAuthUserQuery,
  useLogoutUserMutation,
} = authApi
