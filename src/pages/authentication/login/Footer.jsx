import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50 mt-2">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Don't have an account?
      </p>
      <a
        className="text-primary font-bold text-sm hover:underline"
        href="/register"
      >
        Register
      </a>
    </div>
  )
}

export default Footer
