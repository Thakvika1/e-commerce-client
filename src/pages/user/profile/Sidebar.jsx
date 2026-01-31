import { useState } from 'react'
import useLogout from '../../../hooks/useLogout'
import ButtonDarkMode from '../../../components/common/ButtonDarkMode'
import Modal from '../../../components/common/Modal'

function Sidebar() {
  const [activeNav, setActiveNav] = useState('profile')
  const { logout } = useLogout()

  const [open, setOpen] = useState(false)

  const navItems = [
    { id: 'profile', icon: 'person', label: 'Profile' },
    { id: 'orders', icon: 'package_2', label: 'My Orders' },
    // { id: 'wishlist', icon: 'favorite', label: 'Wishlist' },
    // { id: 'settings', icon: 'settings', label: 'Settings' },
  ]

  return (
    <>
      <Modal  openModal={open} setOpenModal={setOpen} logout={logout} />
      <aside className="w-full lg:w-64 flex flex-col gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  activeNav === item.id
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
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
              // onClick={logout}
              onClick={() => setOpen(true)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
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
