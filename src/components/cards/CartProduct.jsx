import React from 'react'

const CartProduct = ({ image, qty, productName }) => {
  return (
    <>
      <div className="p-6 flex flex-col sm:flex-row gap-6 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        {/* <!-- Product Image --> */}
        <div
          className="w-full sm:w-32 aspect-square rounded-lg bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700"
          data-alt="Wireless noise cancelling headphones on a stand"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrk1Dvy6VZd8L5LB-6MJWqZpKvT-1idW5CyRscZifmEefyI8gohGgbEUh8XZ9HRoL5Kd6Pd0yYCym3LiJGePEGgIlLJP3ntGYYHiBzcM6Fa2vKVr2OHkzon-SkNExsxZaoA4429g2AVJ2Bi-y1kPnxzyg12kjeXKVN6m2USJW0r0wxeJG5M4hjT1_6mPaXPoR9P37YdCGKrD69qhGkSyncxdJVDMlnfd_ZHpB9Udf4oPAwAlffYZi38aAyvTr2aBHrTruPmYUKjIo')",
          }}
        ></div>
        {/* <!-- Details --> */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Premium Wireless Headphones
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Color: Matte Black | Warranty: 2 Years
              </p>
              <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                In Stock
              </div>
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              $299.00
            </p>
          </div>
          <div className="flex justify-between items-end mt-4 sm:mt-0">
            <div className="flex items-center gap-6">
              {/* <!-- Quantity Stepper --> */}
              <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 h-9">
                <button
                  aria-label="Decrease quantity"
                  className="w-9 h-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-l-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    remove
                  </span>
                </button>
                <input
                  className="w-12 h-full text-center border-none bg-transparent text-sm font-semibold text-slate-900 dark:text-white focus:ring-0 p-0"
                  readonly=""
                  type="number"
                  value="1"
                />
                <button
                  aria-label="Increase quantity"
                  className="w-9 h-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-r-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                </button>
              </div>
              {/* <!-- Remove Button --> */}
              <button className="text-sm font-medium text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center gap-1 group/remove">
                <span className="material-symbols-outlined text-[18px] group-hover/remove:fill-current">
                  delete
                </span>
                <span className="hidden sm:inline">Remove</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct
