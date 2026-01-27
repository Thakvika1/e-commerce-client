import OrderSummary from './OrderSummary'
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)

  return (
    <>
      <main className="grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <CartList cart={cart} />
            <OrderSummary />
          </div>
        )}
      </main>
    </>
  )
}

export default Cart
