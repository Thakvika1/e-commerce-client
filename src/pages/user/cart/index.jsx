import React from 'react'
import CartProduct from '../../../components/cards/CartProduct'
import OrderSummary from './OrderSummary'

const Cart = () => {
  return (
    <>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className=" rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </div>
          </div>
          <OrderSummary />
        </div>
      </main>
    </>
  )
}

export default Cart
