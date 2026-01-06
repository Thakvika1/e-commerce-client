import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/productApi'
import { authApi } from '../services/authApi'
import authReducer from '../features/authSlice'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(authApi.middleware),
})
