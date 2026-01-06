import { useState } from 'react'

import BlueDot from '../common/BlueDot'
import MaterialLogo from '../common/MaterialLogo'
import ButtonDarkMode from '../common/ButtonDarkMode'

const Navbar = ({ items = [] }) => {
  const [showMenu, setShowMenu] = useState(false)

  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-[960px] mx-auto px-4 md:px-10 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* <!-- Logo --> */}
            <div className="flex items-center gap-2 text-slate-900 dark:text-white cursor-pointer group">
              <ButtonDarkMode />
              <h2 className="text-xl font-bold tracking-tight">TikiShop</h2>
            </div>

            {/* <!-- Right Actions --> */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                {/* map data  */}
                {items.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>
              <button className="relative p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group cursor-pointer">
                <MaterialLogo iconName={'shopping_cart'} />
                <BlueDot />
              </button>
              {/* <!-- Mobile Menu Icon --> */}
              <button
                onClick={handleOnClick}
                className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                {showMenu && (
                  <div className="absolute top-full right-4 mt-2 w-48 bg-slate-50/90 bg-slate-900/90 rounded-lg shadow-lg md:hidden p-4 flex flex-col gap-3">
                    {items.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="text-white text-md font-medium px-3 py-2 rounded-md hover:bg-primary hover:text-background-dark transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
                {/* <span className="material-symbols-outlined">menu</span> */}
                <MaterialLogo iconName={'menu'} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
