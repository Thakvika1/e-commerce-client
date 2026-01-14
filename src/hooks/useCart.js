import { useState, useEffect, useMemo } from 'react'

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(sessionStorage.getItem('cart')) || []
  })

  useEffect(() => {
    // save cart to sessionStorage whenever it changes
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // add product to cart
  const addToCart = (item) => {
    setCart((oldCart) => {
      const exist = oldCart.find((itemOld) => itemOld.id === item.id)

      if (exist) {
        return oldCart.map((itemOld) =>
          itemOld.id === item.id
            ? { ...itemOld, quantity: itemOld.quantity + 1 }
            : itemOld
        )
      }
      return [...oldCart, { ...item, quantity: 1 }]
    })
  }

  // remove product from cart
  const removeFromCart = (id) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id))
  }

  // update product quantity
  const updateQuantity = (id, quantity) => {
    setCart((oldCart) =>
      oldCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  // decrease quantity
  const decreaseQuantity = (item) => {
    setCart((oldCart) =>
      oldCart.map((itemOld) =>
        itemOld.id === item.id && item.quantity > 1
          ? { ...itemOld, quantity: itemOld.quantity - 1 }
          : itemOld
      )
    )
  }

  // increase quantity
  const increaseQuantity = (item) => {
    setCart((oldCart) =>
      oldCart.map((itemOld) =>
        itemOld.id === item.id && itemOld.quantity < item.stock
          ? { ...itemOld, quantity: itemOld.quantity + 1 }
          : itemOld
      )
    )
  }

  // clear all product from cart
  const clearCart = () => setCart([])

  // calculate total price
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [cart])

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    total,
  }
}
