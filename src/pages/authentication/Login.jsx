import React, { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword)

  return (
    <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-background-light dark:bg-background-dark min-h-screen font-display">
      {/* Login Card */}
      <div className="w-full max-w-[480px] bg-white dark:bg-[#1a2632] rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all">
        <div className="p-8 sm:p-10 flex flex-col gap-6">
          {/* Headline */}
          <div className="text-center">
            <h1 className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-black leading-tight mb-2">
              Welcome back
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              Login to your account to continue
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-5 mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Email Field */}
            <label className="flex flex-col gap-2">
              <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold">
                Email address
              </span>
              <div className="relative">
                <input
                  className="w-full rounded-lg text-[#0d141b] dark:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none h-12 px-4 pr-10 text-base transition-all placeholder:text-slate-400"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
              </div>
            </label>

            {/* Password Field */}
            <label className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold">
                  Password
                </span>
                <a
                  className="text-sm font-bold text-primary hover:underline transition-all"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  className="w-full rounded-lg text-[#0d141b] dark:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none h-12 px-4 pr-12 text-base transition-all placeholder:text-slate-400"
                  placeholder="••••••••"
                  required
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors flex items-center"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </label>

            {/* Submit Button */}
            <button
              className="w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-md active:scale-[0.98] mt-2"
              type="submit"
            >
              Sign In
            </button>
          </form>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50 mt-2">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Don't have an account?
            </p>
            <a
              className="text-primary font-bold text-sm hover:underline"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        {/* Secure Badge */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-4 flex justify-center items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-t border-slate-100 dark:border-slate-800">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span>Secure SSL Encryption</span>
        </div>
      </div>
    </main>
  )
}

export default Login
