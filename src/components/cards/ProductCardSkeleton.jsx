import React from 'react'

const ProductCardSkeleton = () => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 shadow-sm dark:border-slate-700 flex flex-col h-full animate-pulse">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-200 dark:bg-slate-700"></div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-slate-600 mb-2 rounded"></div>

        {/* Product Description */}
        <div className="h-4 w-full bg-gray-200 dark:bg-slate-700 mb-1 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-slate-700 mb-4 rounded"></div>

        {/* Price & Button */}
        <div className="mt-auto flex items-center justify-between">
          <div className="h-6 w-20 bg-gray-300 dark:bg-slate-600 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 dark:bg-slate-600 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton
