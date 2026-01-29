import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="flex items-center gap-3 ">
      <button
        onClick={() => setIsDark(!isDark)}
        className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer
          ${isDark ? 'bg-slate-600' : 'bg-slate-300'}
        `}
      >
        <span
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${isDark ? 'translate-x-7' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  )
}
