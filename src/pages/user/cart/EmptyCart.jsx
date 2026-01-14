import React from 'react'

const EmptyCart = () => {
  return (
    <section className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-20 mt-20">
      <div className="max-w-md mx-auto px-4 text-center">
        <h5 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-8">
          Empty State Preview
        </h5>
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 flex flex-col items-center">
          <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 text-slate-300 dark:text-slate-600">
            <span className="material-symbols-outlined text-5xl">
              production_quantity_limits
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Your cart is empty
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-8 max-w-xs">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-6 rounded-lg transition-colors">
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  )
}

export default EmptyCart
