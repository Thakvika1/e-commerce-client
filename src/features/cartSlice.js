import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  items: JSON.parse(sessionStorage.getItem('cart')) || [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item to cart
    addToCart: (state, action) => {
      const item = action.payload
      const exist = state.items.find((i) => i.id === item.id)

      // stock check
      if (exist && exist.quantity >= item.stock) {
        toast.dismiss()
        toast.error('Item out of stock ❌')
        return
      }

      // existing item -> increase quantity
      if (exist) {
        exist.quantity += 1
        toast.dismiss()
        toast.success('Added to cart 🛒')
      }
      // limit NEW items only
      // else if (state.items.length >= 10) {
      //   toast.dismiss()
      //   toast.error('You can only add 10 items to Cart !!')
      //   return
      // }
      // new item
      else {
        state.items.push({ ...item, quantity: 1 })
        toast.dismiss()
        toast.success('Added to cart 🛒')
      }

      sessionStorage.setItem('cart', JSON.stringify(state.items))
    },

    // remove item from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      sessionStorage.setItem('cart', JSON.stringify(state.items))
      toast.dismiss()
      toast('Item removed ❌')
    },

    // increase quantity
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id)

      if (!item) return

      if (item.quantity >= action.payload.stock) {
        toast.dismiss()
        toast.error('Item out of stock ❌')
        return
      }
      item.quantity += 1
      sessionStorage.setItem('cart', JSON.stringify(state.items))
    },

    // decrease quantity
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id)

      if (!item || item.quantity <= 1) return

      item.quantity -= 1
      sessionStorage.setItem('cart', JSON.stringify(state.items))
    },

    // clear cart
    clearCart: (state) => {
      state.items = []
      sessionStorage.removeItem('cart')
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
