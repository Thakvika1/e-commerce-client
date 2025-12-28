import React from 'react'
import Button from '../common/Button'

const ProductCard = ({
  image,
  productName,
  productPrice,
  productDesciption,
}) => {
  return (
    <>
      <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
        <div className="relative overflow-hidden aspect-[4/3]">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage:
                // "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtI_oZAZfaJ7kR1gGdgkAnBgzTVS0sxu3dMWgN9_jqVTuF7TAQrsRPUqgng77e0m6qdag15eoJnqAIsN0v0-GX09r12tuJK8AUniuBHM6RZss9Y9zwuWG3isERUmV6UQ7Xy8Yu4GrP0ALPlQEhLPYwUs4t443Adslq-WcMcWppOC9EJGmLr3hJNOsXo4V44Qf9tQJ0kSdbAtm_WX3WUbt_09DDEowKbNEmUdUW5QQfGAT042GD71g6Jmcgpqzh4u31Xu8lkS630KI')",
                `url(${image})`,
            }}
          ></div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
              Wireless Headphones
              {productName}
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            High fidelity audio with active noise cancellation and 20h battery
            life.
            {productDesciption}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-black text-slate-900 dark:text-white">
              $199.99
              {productPrice}
            </span>
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
