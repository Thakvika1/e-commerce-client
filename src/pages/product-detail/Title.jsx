import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div className="flex items-center text-sm text-slate-500 mb-4">
      <Link className="hover:text-primary transition-colors" to={'/'}>
        Home
      </Link>
      <span className="material-symbols-outlined text-[16px] mx-1">
        chevron_right
      </span>
      <span className="text-slate-900 dark:text-slate-200 font-medium">
        Product Detail
      </span>
    </div>
  )
}

export default Title
