import React from 'react'

const OrderSummary = () => {
  return (
    <>
      <div className="lg:col-span-4 relative">
        <div className="sticky top-24 flex flex-col gap-6">
          {/* <!-- Summary Card --> */}
          <div className=" rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Order Summary
            </h3>
            {/* <!-- Calculations --> */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  $493.50
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Shipping estimate</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  Free
                </span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Tax estimate</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  $39.48
                </span>
              </div>
            </div>
            {/* <!-- Divider --> */}
            <div className="h-px bg-slate-100 dark:bg-slate-700 mb-6"></div>
            {/* <!-- Total --> */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Order Total
              </span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                $532.98
              </span>
            </div>
            {/* <!-- Checkout Button --> */}
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              Checkout
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
            {/* <!-- Security Note --> */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <span className="material-symbols-outlined text-[14px]">
                lock
              </span>
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderSummary
