import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { addToCart } from '../../features/cartSlice'

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth.isAuthenticated)

  const handleAddToCart = () => {
    if (!auth) {
      toast.dismiss()
      toast.error('You need to Login First !!!')
      return
    }

    dispatch(addToCart(product))
  }
  return (
    <div className="flex flex-col gap-6">
      {/* <!-- Title & Rating --> */}
      <div>
        <h1 className="text-[#0d141b] dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-2">
          {product?.name}
        </h1>
      </div>
      {/* <!-- Price --> */}
      <div className="flex items-baseline gap-4 border-b border-[#e7edf3] dark:border-[#2a3642] pb-6">
        <span className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight">
          ${product?.price}
        </span>
      </div>
      {/* <!-- Description --> */}
      <p className="text-[#4c739a] dark:text-[#9ba8b8] text-base leading-relaxed">
        Experience high-fidelity audio with active noise cancellation. The
        SonicPulse Pro features a 30-hour battery life, ultra-comfortable memory
        foam ear cushions, and seamless multi-device connectivity. Perfect for
        audiophiles and commuters alike.
        {product?.description}
      </p>
      {/* <!-- Actions --> */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        {/* <!-- Add to Cart Button --> */}
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold h-12 rounded-lg transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          Add to Cart
        </button>
      </div>
      {/* <!-- Trust Signals --> */}
      <div className="grid grid-cols-2 gap-4 text-sm text-[#4c739a] dark:text-[#8b9bb4] pt-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-green-500">
            check_circle
          </span>
          <span>Product Stock : {product?.stock}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">
            local_shipping
          </span>
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">
            verified_user
          </span>
          <span>2-Year Warranty</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">
            replay
          </span>
          <span>30-Day Returns</span>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
