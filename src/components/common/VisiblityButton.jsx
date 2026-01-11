import React from 'react'

const VisiblityButton = ({ toggle, showPassword = false }) => {
  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors flex items-center"
      >
        <span className="material-symbols-outlined text-[22px]">
          {showPassword ? 'visibility' : 'visibility_off'}
        </span>
      </button>
    </>
  )
}

export default VisiblityButton
