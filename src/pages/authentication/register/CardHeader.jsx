import React from 'react'

const CardHeader = () => {
  return (
    <div className="px-8 pt-10 pb-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">
          Create your account
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-base">
          Start shopping with us today.
        </p>
      </div>
    </div>
  )
}

export default CardHeader
