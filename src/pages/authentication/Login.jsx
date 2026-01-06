import React, { useState } from 'react'
import Input from '../../components/common/Input'
import { useLoginUserMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword)

  const [errors, setErrors] = useState(null)

  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // check auth state
  const auth = useSelector((state) => state.auth)
  console.log('AUTH STATE:', auth)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    setErrors((prev) => ({
      ...prev,
      errors: {
        ...prev?.errors,
        [e.target.name]: null,
      },
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(formData).unwrap()
      console.log(res.access_token)

      dispatch(
        setCredentials({
          token: res.access_token,
          user: res.user,
        })
      )
      setErrors(null)
      navigate('/')
    } catch (err) {
      console.log(err)
      if (err?.data) {
        setErrors(err.data)
      }
    }
  }

  return (
    <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-background-light dark:bg-background-dark min-h-screen font-display">
      {/* Login Card */}
      <div className="w-full max-w-[480px]  rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all">
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
          <form className="flex flex-col gap-5 mt-2" onSubmit={handleSubmit}>
            {/* Email Field */}
            <label className="flex flex-col gap-2">
              <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold">
                Email address
              </span>
              <div className="relative">
                <Input
                  name={'email'}
                  placeholder={'you@gmail.com'}
                  handleChange={handleChange}
                  type={'email'}
                  autoComplete={'email'}
                  className={`${
                    errors?.errors?.email || errors?.message
                      ? '!border-red-500'
                      : ''
                  }`}
                />
                {errors?.errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.errors.email[0]}
                  </p>
                )}
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
                <Input
                  name={'password'}
                  placeholder={'••••••••'}
                  handleChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={'current-password'}
                  className={`${
                    errors?.errors?.password || errors?.message
                      ? '!border-red-500'
                      : ''
                  }`}
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
              {(errors?.errors?.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.errors.password[0]}
                </p>
              )) ??
                (errors?.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                ))}
            </label>

            {/* Submit Button */}
            <button
              className="w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-md active:scale-[0.98] mt-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
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
