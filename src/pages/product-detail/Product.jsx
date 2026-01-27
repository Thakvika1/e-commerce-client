import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { addToCart } from '../../features/cartSlice'
import CustomerReview from './CustomerReview'

const Product = ({ product }) => {
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
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* <!-- Left Column: Image Gallery --> */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square w-full relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
            <img
              alt="High quality wireless headphones on stand"
              className="h-full w-full object-cover object-center"
              data-alt="High quality wireless headphones on stand"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvNxxHKFLxkd3JdgFjdf-Q-4pQTDGDZgDaB7oSbd0THB-LwxTXK-ITqguELc9PNOsKvoZqBZ8x5ja5vbmlOe58QmYSf0NNc8-j-Z0AAIbycZfc0_TFkr2ouYJn0xGDP2DqMKrsglxBTxPm1Rp28gYQsLjwnFD0YSuuidb6o1pV042E1DVG7h-BR19Mk-mDVTQ8YFt4tnizwO7s2aPZhxcMYRDresnhCpQFcnAiSzbf0lQARkdc6gjQpKwzombVWYUfIeRBCOaw5xo"
            />
            <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black transition-colors text-[#0d141b] dark:text-white">
              <span className="material-symbols-outlined">favorite_border</span>
            </button>
          </div>
          <h1>Relative Product</h1>
          <div className="grid grid-cols-4 gap-4">
            <button className="aspect-square overflow-hidden rounded-lg border-2 border-primary ring-2 ring-primary/20">
              <img
                alt="Thumbnail of headphones front view"
                className="h-full w-full object-cover"
                data-alt="Thumbnail of headphones front view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC68f8yaqN_xGi8L18sxuMMpmM3ijxnNJHe-ybupWMlXIlsMiCxKOeW1UniWcF_L9USv9bhIh-LBBVwXXLryHU5U1OtR-7lJCFQASiXg3LKDXizMg2cKIHNwF7-mh-GMwL3EfpSuu9dAvbTsM0peCH5bGg6j0l4PWDzdCifjf3JKjS80nJwOQY3h3ErW4SwYDPD4s2i2GqlxUg5KGRmCyt5q6mttbBYoB1mi2CD1tMzM_rlZckTrsMFKRspjkEctry4wcScU2bYP-c"
              />
            </button>
            <button className="aspect-square overflow-hidden rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
              <img
                alt="Thumbnail of headphones side view"
                className="h-full w-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                data-alt="Thumbnail of headphones side view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADhTA81XCI97jag0_A8B7IJcFCWgteR_3fJUgi4y8E7ZTMdokZtvbOQsDvoZa1TCeTNmxZh3vYXC5Lb5eQnHH9ERlxgkNyHTlUVyE9x2fxPdIRdJT-U8CVJTRFuhGkYZTfLEP9wqalr-iCLhRqwq626SSs9T2PXiUWfcLOrziRHcdCvEJKG3ESVNtvrRPmBOWgv7mDQXXiU0TPaVX5ErSvJ8jdqnZe90h9O0opKM-BEdjHyDwsfJsBqDfsW1QX5S2fn-4cuN766gw"
              />
            </button>
            <button className="aspect-square overflow-hidden rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
              <img
                alt="Thumbnail of headphones lifestyle shot"
                className="h-full w-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                data-alt="Thumbnail of headphones lifestyle shot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAJl3LbrS9vAk_IfBs01PZdhnRb8tukKXdYcg2pDjT0aVKRwJ6LATqViaHL-oQ9FIolpYnt4dtZ06YKgc5HapnrFF2rZbRkmLaPKd13Y40QRZfwA6ks5Rywsq1P5j-7YVhW9ahc_bjrgghJ6v4pubLpQ_3QL9rqf90fitp3bf6Q-vNcxLQYin7Dl7kp-CBSpAJWL0UhyAOSFuQKSK0FLneLHlGwEiBEauLvFEml6A_DKl-xL2OsCiUXAMeQUrwfyLhYL7DaMSbT0A"
              />
            </button>
            <button className="aspect-square overflow-hidden rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors relative">
              <img
                alt="Thumbnail of headphones detail view"
                className="h-full w-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                data-alt="Thumbnail of headphones detail view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwa2Xp_4g84OKjzpSDwSUjKXmaCnFOMs6F5iC3BDUVv9jIoOrAMeewA1eviq8REzNlwYk2TvyAVsHFJZ7uFO99uatDLYZXnfFhTzi5LzCjKQvXSgKp2S5SQ4E9a3hinZySmqJY6GzcpQRkEAt8w_TOmpttL4lA1YOJdWA8ANx8e9mUPCqr6mXqs7fBk5h8RRDNPGR8ZcZUYSus2Y0SdTqYs6iALQ0WrgmMxlx3v195UH6nI_xeT6GAoINqlLfwHoEqBqF58IasqE"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xs font-bold rounded-lg pointer-events-none">
                +2
              </div>
            </button>
          </div>
        </div>
        {/* <!-- Right Column: Product Info --> */}
        <div className="flex flex-col gap-6">
          {/* <!-- Title & Rating --> */}
          <div>
            <h1 className="text-[#0d141b] dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-2">
              SonicPulse Pro Wireless Headphones
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-yellow-500">
                <span className="material-symbols-outlined text-[20px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[20px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[20px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[20px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[20px]">
                  star_half
                </span>
              </div>
              <span className="text-sm font-medium text-[#4c739a] dark:text-[#8b9bb4]">
                4.5 (128 reviews)
              </span>
            </div>
          </div>
          {/* <!-- Price --> */}
          <div className="flex items-baseline gap-4 border-b border-[#e7edf3] dark:border-[#2a3642] pb-6">
            <span className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight">
              $249.00
            </span>
            {/* <span className="text-[#4c739a] dark:text-[#8b9bb4] text-lg font-medium line-through">
              $299.00
            </span>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">
              SAVE $50
            </span> */}
          </div>
          {/* <!-- Description --> */}
          <p className="text-[#4c739a] dark:text-[#9ba8b8] text-base leading-relaxed">
            Experience high-fidelity audio with active noise cancellation. The
            SonicPulse Pro features a 30-hour battery life, ultra-comfortable
            memory foam ear cushions, and seamless multi-device connectivity.
            Perfect for audiophiles and commuters alike.
          </p>
          {/* <!-- Color Selection (Optional Extra) --> */}
          {/* <div>
            <span className="text-sm font-semibold text-[#0d141b] dark:text-white mb-3 block">
              Color: Midnight Black
            </span>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-primary dark:ring-offset-background-dark"></button>
              <button className="w-8 h-8 rounded-full bg-slate-300 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 dark:ring-offset-background-dark transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-blue-900 dark:ring-offset-background-dark transition-all"></button>
            </div>
          </div> */}
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
              <span>In Stock, ready to ship</span>
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
      </div>
      {/* <!-- Secondary Sections (Tabs/Accordions) --> */}
      <div className="mt-16 border-t border-[#e7edf3] dark:border-[#2a3642] pt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* <!-- Sidebar Navigation for Details --> */}
          <div className="md:w-1/4 flex flex-col gap-1">
            <button className="text-left px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold">
              Product Description
            </button>
            <button className="text-left px-4 py-3 rounded-lg text-[#4c739a] dark:text-[#8b9bb4] hover:bg-gray-100 dark:hover:bg-[#1a2632] transition-colors font-medium">
              Specifications
            </button>
            <button className="text-left px-4 py-3 rounded-lg text-[#4c739a] dark:text-[#8b9bb4] hover:bg-gray-100 dark:hover:bg-[#1a2632] transition-colors font-medium">
              Reviews (128)
            </button>
            <button className="text-left px-4 py-3 rounded-lg text-[#4c739a] dark:text-[#8b9bb4] hover:bg-gray-100 dark:hover:bg-[#1a2632] transition-colors font-medium">
              Shipping &amp; Returns
            </button>
          </div>
          {/* <!-- Content Area --> */}
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold text-[#0d141b] dark:text-white mb-4">
              Unmatched Sound Quality
            </h3>
            <p className="text-[#4c739a] dark:text-[#9ba8b8] leading-relaxed mb-6">
              The SonicPulse Pro headphones are engineered to deliver a superior
              audio experience. Whether you're in a busy office, commuting on a
              train, or relaxing at home, our advanced Active Noise Cancellation
              (ANC) technology blocks out distractions so you can focus on what
              matters most—your music.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#e7edf3] dark:border-[#2a3642]">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined">graphic_eq</span>
                </div>
                <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">
                  Deep Bass, Crystal Highs
                </h4>
                <p className="text-sm text-[#4c739a] dark:text-[#9ba8b8]">
                  Custom 40mm drivers produce a rich soundstage with punchy bass
                  and clear vocals.
                </p>
              </div>
              <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#e7edf3] dark:border-[#2a3642]">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined">
                    battery_charging_full
                  </span>
                </div>
                <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">
                  All-Day Battery
                </h4>
                <p className="text-sm text-[#4c739a] dark:text-[#9ba8b8]">
                  Enjoy up to 30 hours of playtime on a single charge. Quick
                  charge gives you 5 hours in just 10 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reviews Summary Section Reused/Adapted --> */}
      {/* <div className="mt-16 mb-20">
        <h3 className="text-2xl font-bold text-[#0d141b] dark:text-white mb-8">
          Customer Reviews
        </h3>
        <div className="bg-white dark:bg-[#1a2632] rounded-xl p-8 border border-[#e7edf3] dark:border-[#2a3642]">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-[#0d141b] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">
                4.5
              </p>
              <div className="flex gap-1 text-primary">
                <span className="material-symbols-outlined text-[24px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[24px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[24px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[24px] fill-current">
                  star
                </span>
                <span className="material-symbols-outlined text-[24px]">
                  star_half
                </span>
              </div>
              <p className="text-[#4c739a] dark:text-[#8b9bb4] text-base font-medium">
                Based on 128 reviews
              </p>
            </div>
            <div className="flex-1 grid min-w-[200px] max-w-[500px] grid-cols-[20px_1fr_40px] items-center gap-y-3 gap-x-4">
              <p className="text-[#0d141b] dark:text-white text-sm font-medium">
                5
              </p>
              <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
                <div
                  className="rounded-full bg-primary"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
                75%
              </p>
              <p className="text-[#0d141b] dark:text-white text-sm font-medium">
                4
              </p>
              <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
                <div
                  className="rounded-full bg-primary"
                  style={{ width: '15%' }}
                ></div>
              </div>
              <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
                15%
              </p>
              <p className="text-[#0d141b] dark:text-white text-sm font-medium">
                3
              </p>
              <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
                <div
                  className="rounded-full bg-primary"
                  style={{ width: '3%' }}
                ></div>
              </div>
              <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
                3%
              </p>
              <p className="text-[#0d141b] dark:text-white text-sm font-medium">
                2
              </p>
              <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
                <div
                  className="rounded-full bg-primary"
                  style={{ width: '2%' }}
                ></div>
              </div>
              <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
                2%
              </p>
              <p className="text-[#0d141b] dark:text-white text-sm font-medium">
                1
              </p>
              <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
                <div
                  className="rounded-full bg-primary"
                  style={{ width: '5%' }}
                ></div>
              </div>
              <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
                5%
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <CustomerReview />
    </main>
  )
}

export default Product
