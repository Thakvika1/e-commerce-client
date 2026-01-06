import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // token: null,
  // Check localStorage on startup to maintain session
  token: localStorage.getItem('token') || null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token
      state.user = action.payload.user
      // Persist token so it survives a page refresh
      localStorage.setItem('token', action.payload.token)
    },
    clearAuth: (state) => {
      state.token = null
      state.user = null
      localStorage.removeItem('token')
    },
  },
})

export const { setCredentials, clearAuth } = authSlice.actions
export default authSlice.reducer
