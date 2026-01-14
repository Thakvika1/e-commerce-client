import Button from '../common/Button'
import { Link } from 'react-router-dom'
import MaterialLogo from '../common/MaterialLogo'

const ProductCard = ({ product, addProduct }) => {
  return (
    <>
      <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 shadow-sm dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
        <div className="relative overflow-hidden aspect-[4/3]">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
            style={{
              backgroundImage: `url(${
                product.image ??
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCtI_oZAZfaJ7kR1gGdgkAnBgzTVS0sxu3dMWgN9_jqVTuF7TAQrsRPUqgng77e0m6qdag15eoJnqAIsN0v0-GX09r12tuJK8AUniuBHM6RZss9Y9zwuWG3isERUmV6UQ7Xy8Yu4GrP0ALPlQEhLPYwUs4t443Adslq-WcMcWppOC9EJGmLr3hJNOsXo4V44Qf9tQJ0kSdbAtm_WX3WUbt_09DDEowKbNEmUdUW5QQfGAT042GD71g6Jmcgpqzh4u31Xu8lkS630KI'
              })`,
            }}
          ></div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
              {product.name ?? 'Wireless Headphones'}
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            ${product.price ?? 199.99}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-black text-slate-900 dark:text-white">
              <Link to={`product/${product.id}`}>Detail</Link>
            </span>
            <button
              onClick={() => addProduct(product)}
              className="bg-primary cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-md shadow-primary/20 flex items-center gap-2 group/btn "
            >
              Add To Cart
              <MaterialLogo>add_shopping_cart</MaterialLogo>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
