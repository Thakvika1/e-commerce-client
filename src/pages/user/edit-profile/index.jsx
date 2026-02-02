import React, { useState } from 'react'
import Input from '../../../components/common/Input'
import useAuthUser from '../../../hooks/useAuthUser'
import { useForm } from '../../../hooks/useForm'
import { VALIDATION_RULES } from '../../../config/validateRules'
import { Link } from 'react-router-dom'
import { useEditUserMutation } from '../../../services/authApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
  const { user } = useAuthUser()

  const [editUser, { isLoading }] = useEditUserMutation()
  const navigate = useNavigate()

  // if (isLoading) return null

  const initialFormData = {
    name: user?.name || '',
    email: user?.email || '',
    phone_number: user?.phone_number || '',
    address: user?.address || '',
  }

  const { errors, setErrors, handleChange, handleSubmit } = useForm(
    initialFormData,
    VALIDATION_RULES.profileUpdate
  )

  const profileImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfUgd3DGwC1wGlGravbWznlbUvC8JYVmcO8Ct9dCi9rVWGnYNtOI7q53I0PHWhfv67FeuQpZ4MXu9_ez9fj36OKy6_JQEOLOFepSmLwDqID1ine6paubvj02wefUG7pF-sMZ7603Sv6KrsD-gnMXR3YSxqpd3010U3iWrcsd2nCA21ybDY7Uvt3W8mpa37aYbImmNjN5Q7iMqqh-kBFx1tUtrK6jwe7zat_5_xcnqb9K-UJycj824XDvbT44dx-wYOnyld4z91OI4'

  // Submit function receives actual formData
  const updateUser = async (data) => {
    try {
      await editUser(data).unwrap()
      toast.success('Profile updated successfully')
      navigate('/profile')
    } catch (err) {
      toast.error(err.data.message)
      if (err?.data) setErrors(err.data)
      console.log('error : ', err)
    }
  }

  // const handleOnSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('submitted')
  // }

  // console.log(errors)

  return (
    <>
      <main className="flex flex-1 justify-center py-10 px-4">
        <div className="layout-content-container flex flex-col max-w-[640px] flex-1 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800 h-fit">
          {/* ProfileHeader Section */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="relative group">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 ring-4 ring-blue-400/10"
                style={{
                  backgroundImage: `url("${user.image || profileImageUrl}")`,
                }}
                title="A smiling professional person looking at the camera"
              ></div>
              <button className="absolute bottom-0 right-0 bg-[#2b8cee] text-white p-2 rounded-full border-4 border-white dark:border-slate-900 hover:scale-105 transition-transform flex items-center justify-center shadow-md">
                <span className="text-[20px]">📷</span>
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                Edit Profile
              </h1>
              <p className="text-[#4c739a] dark:text-slate-400 text-base font-normal">
                Update your personal information and contact details
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(updateUser)}
            // onSubmit={handleOnSubmit
          >
            {/* Full Name Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal">
                Full Name
              </label>
              <Input
                name="name"
                placeholder="Full Name"
                handleChange={handleChange}
                type={'text'}
                value={initialFormData.name}
                className="form-input flex w-full rounded-lg text-[#0d141b] dark:text-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] h-14 p-4 text-base font-normal transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal">
                Email
              </label>
              <Input
                name="email"
                placeholder="Email"
                handleChange={handleChange}
                type={'email'}
                value={initialFormData.email}
                className="form-input flex w-full rounded-lg text-[#0d141b] dark:text-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] h-14 p-4 text-base font-normal transition-all"
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal">
                Phone Number
              </label>
              <Input
                name="phone_number"
                placeholder="Phone Number"
                handleChange={handleChange}
                type={'tel'}
                value={initialFormData.phone_number}
                className="form-input flex w-full rounded-lg text-[#0d141b] dark:text-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] h-14 p-4 text-base font-normal transition-all"
              />
            </div>

            {/* Address Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal">
                Address
              </label>
              <textarea
                className="form-input flex w-full rounded-lg text-[#0d141b] dark:text-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] min-h-[100px] p-4 text-base font-normal transition-all"
                placeholder="Enter your full street address"
                name="address"
                value={initialFormData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-[#e7edf3] dark:border-slate-800">
              <button
                className="flex-1 bg-[#2b8cee] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#2380d9] transition-colors shadow-sm active:scale-[0.98]"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Saving' : 'Save Changes'}
              </button>
              <Link to={'/profile'}>
                <button
                  className="flex-1 bg-[#f6f7f8] dark:bg-slate-800 text-[#0d141b] dark:text-slate-200 font-bold py-3 px-6 rounded-lg border border-[#cfdbe7] dark:border-slate-700 hover:bg-[#e7edf3] dark:hover:bg-slate-700 transition-colors"
                  type="button"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default EditProfile
