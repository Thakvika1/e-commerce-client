import React from 'react'

const BlueDot = () => {
  return (
    <>
      <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
      </span>
    </>
  )
}

export default BlueDot
