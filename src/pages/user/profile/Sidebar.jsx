import { useState } from 'react'
import useLogout from '../../../hooks/useLogout'
import ButtonDarkMode from '../../../components/common/ButtonDarkMode'
import Modal from '../../../components/common/Modal'
import { Link } from 'react-router-dom'

function Sidebar() {
  const [activeNav, setActiveNav] = useState(0)
  const { logout } = useLogout()

  const [open, setOpen] = useState(false)

  const navItems = [
    { icon: 'person', label: 'Profile', link: '' },
    { icon: 'package_2', label: 'My Orders', link: 'orders' },

    // { id: 'wishlist', icon: 'favorite', label: 'Wishlist' },
    // { id: 'settings', icon: 'settings', label: 'Settings' },
  ]

  return (
    <>
      <Modal openModal={open} setOpenModal={setOpen} logout={logout} />
      <aside className="w-full lg:w-64 flex flex-col gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <nav className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                onClick={() => setActiveNav(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  activeNav === index
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}
                to={`/profile/${item.link}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
            {/* Theme Toggle */}
            <div
              className={` flex items-center justify-between px-4 py-3 rounded-lg transition-all text-slate-600 dark:text-slate-400`}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">dark_mode</span>
                <span className="text-sm font-medium">Theme</span>
              </div>

              <ButtonDarkMode />
            </div>
          </nav>
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
            <button
              onClick={() => setOpen(true)}
              className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
