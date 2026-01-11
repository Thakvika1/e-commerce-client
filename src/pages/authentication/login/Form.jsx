import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../../services/authApi'
import { setCredentials } from '../../../features/authSlice'
import Input from '../../../components/common/Input'
import VisiblityButton from '../../../components/common/VisiblityButton'
import { errorBorderClass, getFieldError } from '../../../utils/formErrors'
import { VALIDATION_RULES } from '../../../config/validateRules'
import { useForm } from '../../../hooks/useForm'

const Form = () => {
  // Controlled form hook
  const { formData, errors, setErrors, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    VALIDATION_RULES.login
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginUser, { isLoading }] = useLoginUserMutation()

  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => setShowPassword(!showPassword)

  // Submit function receives actual formData
  const login = async (data) => {
    try {
      const res = await loginUser(data).unwrap()

      dispatch(
        setCredentials({
          token: res.access_token,
          user: res.user,
        })
      )

      navigate('/')
    } catch (err) {
      if (err?.data) setErrors(err.data)
      console.log('error : ', err)
    }
  }

  return (
    <form className="flex flex-col gap-5 mt-2" onSubmit={handleSubmit(login)}>
      {/* Email Field */}
      <label className="flex flex-col gap-2">
        <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold">
          Email address
        </span>
        <div className="relative">
          <Input
            name="email"
            placeholder="you@gmail.com"
            handleChange={handleChange}
            type="email"
            autoComplete="email"
            className={errorBorderClass(errors, 'email')}
          />
          {getFieldError(errors, 'email') && (
            <p className="text-red-500 text-sm mt-1">
              {getFieldError(errors, 'email')}
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
        </div>
        <div className="relative">
          <Input
            name="password"
            placeholder="••••••••"
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            className={errorBorderClass(errors, 'password')}
          />
          <VisiblityButton
            toggle={togglePassword}
            showPassword={showPassword}
          />
        </div>
        {getFieldError(errors, 'password') && (
          <p className="text-red-500 text-sm mt-1">
            {getFieldError(errors, 'password')}
          </p>
        )}
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-md active:scale-[0.98] mt-2"
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  )
}

export default Form
