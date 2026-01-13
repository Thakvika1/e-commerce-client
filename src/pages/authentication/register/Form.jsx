import { useState } from 'react'
import Input from '../../../components/common/Input'
import { useRegisterUserMutation } from '../../../services/authApi'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import { VALIDATION_RULES } from '../../../config/validateRules'
import { getFieldError } from '../../../utils/formErrors'
import { errorBorderClass } from '../../../utils/formErrors'
import VisiblityButton from '../../../components/common/VisiblityButton'

const Form = () => {
  const { formData, errors, setErrors, handleChange, handleSubmit } = useForm(
    { name: '', email: '', password: '', confirm_password: '' },
    VALIDATION_RULES.register
  )

  // register user mutation
  const [registerUser, { isLoading }] = useRegisterUserMutation()

  // navigation hook
  const navigate = useNavigate()

  const register = async (data) => {
    try {
      await registerUser(data).unwrap()
      navigate('/login')
    } catch (err) {
      console.log(err)

      // backend validate
      if (err?.data) {
        setErrors(err.data)
      }
    }
  }

  // toggle show password
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(register)}>
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
          className={errorBorderClass(errors, 'name')}
        />
        {getFieldError(errors, 'name') && (
          <p className="text-red-500 text-sm mt-1">
            {getFieldError(errors, 'name')}
          </p>
        )}
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
          className={errorBorderClass(errors, 'email')}
        />
        {getFieldError(errors, 'email') && (
          <p className="text-red-500 text-sm mt-1">
            {getFieldError(errors, 'email')}
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
            className={errorBorderClass(errors, 'password')}
          />
          <VisiblityButton
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
        {getFieldError(errors, 'password') && (
          <p className="text-red-500 text-sm mt-1">
            {getFieldError(errors, 'password')}
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
            className={errorBorderClass(errors, 'confirm_password')}
          />
          <VisiblityButton
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />
        </div>
        {getFieldError(errors, 'confirm_password') && (
          <p className="text-red-500 text-sm mt-1">
            {getFieldError(errors, 'confirm_password')}
          </p>
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
    </form>
  )
}

export default Form
