import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQueryPublic = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/api',
  headers: {
    Accept: 'application/json',
  },
})
