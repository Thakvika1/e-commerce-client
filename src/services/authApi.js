import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from '../utils/baseQueryWithToken'

export const authApi = createApi({
  reducerPath: 'authApi',
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

    getAuthUser: builder.query({
      query: () => 'user',
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
  useGetAuthUserQuery,
  useLogoutUserMutation,
} = authApi
