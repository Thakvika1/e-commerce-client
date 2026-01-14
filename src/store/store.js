import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/productApi'
import { authApi } from '../services/authApi'
import authReducer from '../features/authSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(authApi.middleware),
})
