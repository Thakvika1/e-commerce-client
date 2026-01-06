import React, { useState } from 'react'
import { useRegisterUserMutation } from '../../services/authApi'
import Input from '../../components/common/Input'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  // register user mutation
  const [registerUser, { isLoading, error }] = useRegisterUserMutation()

  // navigation hook
  const navigate = useNavigate()

  // errors state
  const [errors, setErrors] = useState(null)

  // password match state
  const [checkPassword, setCheckPassword] = useState('')

  // form data state
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  // validate data
  // const validateForm = () => {
  //   const newErrors = {}

  //   if (!form.name.trim()) newErrors.name = 'Name is required'
  //   if (!form.email.trim()) newErrors.email = 'Email is required'
  //   if (!form.password) newErrors.password = 'Password is required'
  //   if (form.password.length < 8)
  //     newErrors.password = 'Password must be at least 8 characters'
  //   if (form.password !== form.confirm_password)
  //     newErrors.confirm_password = 'Passwords do not match'

  //   setErrors({ errors: newErrors })
  //   return Object.keys(newErrors).length === 0
  // }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    setErrors((prev) => ({
      ...prev,
      errors: {
        ...prev?.errors,
        [e.target.name]: null,
      },
    }))

    // clear password mismatch when typing
    if (e.target.name === 'password' || e.target.name === 'confirm_password') {
      setCheckPassword('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!validateForm()) return

    // password mismatch check
    if (form.password !== form.confirm_password) {
      setCheckPassword('Password does not match')
      return
    }

    // clear error if matched
    setCheckPassword('')

    try {
      const res = await registerUser(form).unwrap()
      setErrors(null)
      navigate('/login')
      // setForm({
      //   name: '',
      //   email: '',
      //   password: '',
      //   confirm_password: '',
      // })

      // console.log(res)
    } catch (err) {
      console.log(err)

      if (err?.data) {
        setErrors(err.data)
      }
    }
  }

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="w-full max-w-[520px] rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all">
        {/* Card Header */}
        <div className="px-8 pt-10 pb-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">
              Create your account
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              Start shopping with us today.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="px-8 pb-10 pt-4">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="flex flex-col gap-2">
              <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold">
                Full Name
              </span>
              <Input
                name={'name'}
                handleChange={handleChange}
                placeholder={'John Doe'}
                autoComplete={'username'}
                type={'text'}
              />
            </label>

            {/* Email */}
            <label className="flex flex-col gap-2">
              <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold">
                Email Address
              </span>
              <Input
                name={'email'}
                handleChange={handleChange}
                placeholder={'name@example.com'}
                autoComplete={'email'}
                type={'email'}
                className={`${errors?.errors?.email ? '!border-red-500' : ''}`}
              />
              {errors?.errors?.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.errors?.email[0]}
                </p>
              )}
            </label>

            {/* Password */}
            <label className="flex flex-col gap-2">
              <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold">
                Password
              </span>
              <div className="relative">
                <Input
                  name={'password'}
                  handleChange={handleChange}
                  placeholder={'••••••••'}
                  autoComplete={'new-password'}
                  type={showPassword ? 'text' : 'password'}
                  className={`${
                    errors?.errors?.password ? '!border-red-500' : ''
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  aria-label="Toggle password visibility"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
              {errors?.errors?.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.errors?.password[0]}
                </p>
              )}
            </label>

            {/* Confirm Password */}
            <label className="flex flex-col gap-2">
              <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold">
                Confirm Password
              </span>
              <div className="relative">
                <Input
                  name={'confirm_password'}
                  handleChange={handleChange}
                  placeholder={'••••••••'}
                  autoComplete={'new-password'}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`${
                    errors?.errors?.password || errors?.message
                      ? '!border-red-500'
                      : ''
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  aria-label="Toggle confirm password visibility"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {showConfirmPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
              {checkPassword && (
                <p className="text-red-500 text-sm mt-1">{checkPassword}</p>
              )}
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                Or continue with
              </span>
              <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition font-bold text-slate-700 dark:text-slate-200 text-sm shadow-sm"
              >
                <img
                  alt="Google"
                  className="w-5 h-5"
                  data-alt="Google G logo in colors"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsTHnWeOcXVD1WrrGIB5eKTPko7k1mFGtVZK_689A0KcP4YRJ4hjaFPhwAEKPhVjjO9HMV17dcRQpbixDdQPMKu4sVPueSaZKh6b3X1WdxSsqe_oGg4M8zMqWm16FuTxzuJDTwoDqpEL1REjK_xrwf9yEtQoC3sXf7e6F1-X05KTe3k9KHiVZvbBWWOZntxrYB9NZVaaygzamKuDlq_Amspzn9wy_ubtfC5rCWVkT_trUH-mvNQ8n5GPtCLKBzwk_EBxyH3q78MNA"
                />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition font-bold text-slate-700 dark:text-slate-200 text-sm shadow-sm"
              >
                <img
                  alt="Facebook"
                  className="w-5 h-5"
                  data-alt="Facebook f logo in blue"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSS2ehTtWxMG5375BawDuKZSlNgtLyyerz6g76U7CMTBPOQkurJf-cqsUE6AWywIsup4TbPzbVPGjdx7KQN3gBCF7yMDd1DRZTPdZxrRtVYm-B159DCCHNCQOa1qu_phzVWDjOL6p42Gefmj8GkB4t3LJiBUo3M8kw0ThcUxhVEWVRKF-qUurjtOcWbcY5SbPAAFCexyFt7nuSsquhCjL1XTXxnO8xePcxKWW4arhfy-MsyD18x7oNv42xlfV6HkA-7N6yY8UrXw0"
                />
                Facebook
              </button>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50 mt-2">
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                Already have an account?{' '}
                <a
                  href="#"
                  className="text-primary font-black hover:underline ml-1"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Register
