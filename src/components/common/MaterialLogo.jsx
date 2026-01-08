import React from 'react'

const MaterialLogo = ({ children, className = '' }) => {
  return (
    <>
      <span className={`material-symbols-outlined ${className}`}>
        {children}
      </span>
    </>
  )
}

export default MaterialLogo
