import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/productApi'
import { authApi } from '../services/authApi'
import { categoryApi } from '../services/categoryApi'

import authReducer from '../features/authSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(authApi.middleware)
      .concat(categoryApi.middleware),
})
