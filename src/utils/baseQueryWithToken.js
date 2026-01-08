import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../config/apiConfig'
// import { clearAuth } from '../features/authSlice'
// import { authApi } from './authApi'

export const baseQueryWithToken = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    headers.set('Accept', 'application/json')
    return headers
  },
})

// export const baseQueryWithAuth = async (args, api, extraOptions) => {
//   const result = await rawBaseQuery(args, api, extraOptions)

//   if (result.error?.status === 401) {
//     api.dispatch(clearAuth())
//     api.dispatch(authApi.util.resetApiState())
//   }

//   return result
// }
