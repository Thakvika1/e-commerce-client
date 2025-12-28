import React from 'react'
import MaterialLogo from './MaterialLogo'

const Button = ({ children, type }) => {
  return (
    <>
      <button type={type} className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-md shadow-primary/20 flex items-center gap-2 group/btn">
        <MaterialLogo iconName={'add_shopping_cart'} />
        {children}
      </button>
    </>
  )
}

export default Button
