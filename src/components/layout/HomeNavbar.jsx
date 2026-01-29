import { useState } from 'react'

import BlueDot from '../common/BlueDot'
import MaterialLogo from '../common/MaterialLogo'
import { useSelector } from 'react-redux'
import { CART } from '../../config/routes'
import { Link } from 'react-router-dom'

const HomeNavbar = ({ items = [], username, blueDot }) => {
  const [showMenu, setShowMenu] = useState(false)

  // const { cart } = useCart()

  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }

  const auth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-[960px] mx-auto px-4 md:px-10 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white cursor-pointer group">
              <h2 className="text-xl font-bold tracking-tight">
                {auth ? `Welcome ${username}` : 'Welcome'}
              </h2>
            </div>

            {/* <!-- Right Actions --> */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                {/* map data  */}
                {items.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
              {auth ? (
                <Link to={'/profile'}>
                  <div
                    className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border-2 border-blue-300"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZVyq1myWQVXict_z0ovXidBl-Y73xJuD3M-KIAa5CT-Pb8DeBWnkoMWMqABZvjT_eOEGRTIoUXTuW-uxE1fisSMumoXcYAfpZ_eek47opWIhxttNHI6VSgOOrHF_bx-JuVru_-2TwBnENdq8v1doWpNbwFyKLWuI1uKPgYAY_U_4yKT3dQjf-D8_EVxD4XIAG36cQD2uSSoAEBQodCt3z_U6GQfM3bHYkl6JvZTtUKJA6TgQ4Mny8IkHslK2Br1qIgCzi1e7CxXM")',
                    }}
                  />
                </Link>
              ) : null}
              <button className="relative p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group cursor-pointer">
                <Link to={CART}>
                  <MaterialLogo>shopping_cart</MaterialLogo>
                  {blueDot && <BlueDot />}
                </Link>
              </button>

              {/* <!-- Mobile Menu Icon --> */}
              <button
                onClick={handleOnClick}
                className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                {showMenu && (
                  <div className="absolute top-full right-4 mt-2 w-48 bg-slate-50/90 bg-slate-900/90 rounded-lg shadow-lg md:hidden p-4 flex flex-col gap-3">
                    {items.map((item, index) => (
                      <Link
                        className="text-white text-md font-medium px-3 py-2 rounded-md hover:bg-primary hover:text-background-dark transition-colors"
                        key={index}
                        to={item.link}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                <MaterialLogo>menu</MaterialLogo>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HomeNavbar
