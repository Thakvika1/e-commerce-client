import React from 'react'

const Input = ({
  name,
  handleChange,
  type,
  placeholder,
  autoComplete,
  className = '',
}) => {
  return (
    <input
      name={name}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
      className={`
        w-full h-12 px-4 rounded-default
        border border-slate-200 dark:border-slate-700
        bg-slate-50 dark:bg-slate-900/50
        text-slate-900 dark:text-white
        placeholder:text-slate-400
        focus:border-primary focus:ring-2 focus:ring-primary/20
        outline-none transition-all
        ${className}
      `}
    />
  )
}

export default Input
