import CartProduct from '../../../components/cards/CartProduct'

const CartList = ({ cart }) => {
  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      <div className=" rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
        {cart.map((item) => (
          <CartProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CartList
