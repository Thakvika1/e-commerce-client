import { Link } from 'react-router-dom'

const CartTitle = ({ totalItem }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center text-sm text-slate-500 mb-2">
        <Link className="hover:text-primary transition-colors" to={'/'}>
          Home
        </Link>
        <span className="material-symbols-outlined text-[16px] mx-1">
          chevron_right
        </span>
        <span className="text-slate-900 dark:text-slate-200 font-medium">
          Cart
        </span>
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
        Your Shopping Cart
      </h2>
      <p className="text-slate-500 dark:text-slate-400 mt-1">
        You have {totalItem} items in your cart ready for checkout.
      </p>
    </div>
  )
}

export default CartTitle
