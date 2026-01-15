import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from '../../config/routes'

const AuthNavbar = () => {
  return (
    <nav className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-[#1a2632] px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-4 text-[#0d141b] dark:text-white">
        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
          <span className="material-symbols-outlined">storefront</span>
        </div>
        <h2 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Tiki E-Commerce Store
        </h2>
      </div>
      <div className="hidden sm:flex gap-4 text-sm font-medium text-[#0d141b] dark:text-slate-200">
        <Link
          className="text-sm font-medium hover:text-primary transition-colors"
          to={HOME}
        >
          Home
        </Link>
      </div>
    </nav>
  )
}

export default AuthNavbar
