import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="flex items-center text-sm text-slate-500 mb-2">
        <Link className="hover:text-primary transition-colors" to={'/'}>
          Home
        </Link>
        <span className="material-symbols-outlined text-[16px] mx-1">
          chevron_right
        </span>
        <span className="text-slate-900 dark:text-slate-200 font-medium">
          Create Product
        </span>
      </div>
      <div className="mb-8">
        <h1 className="text-[#0d141b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
          Create New Product
        </h1>
        <p className="text-[#4c739a] dark:text-slate-400 text-base font-normal mt-2">
          Add high-quality photos and detailed descriptions to boost your sales.
        </p>
      </div>
    </>
  )
}

export default Header
