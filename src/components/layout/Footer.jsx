import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=" border-t border-gray-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-[960px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-6">
                <h2 className="text-xl font-bold">TikiShop</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Your one-stop destination for premium quality products. We bring
                the best trends directly to your doorstep.
              </p>
              <div className="flex gap-4">
                <a
                  className="text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <i className="material-symbols-outlined">public</i>
                </a>
                <a
                  className="text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <i className="material-symbols-outlined">alternate_email</i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-6">
                Shop
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Discount
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    All Products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-6">
                Company
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-6">
                Support
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 ShopLogo Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="material-symbols-outlined text-2xl">
                credit_card
              </span>
              <span className="material-symbols-outlined text-2xl">
                payments
              </span>
              <span className="material-symbols-outlined text-2xl">
                account_balance_wallet
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
