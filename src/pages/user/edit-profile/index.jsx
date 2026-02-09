import Input from '../../../components/common/Input'
import useAuthUser from '../../../hooks/useAuthUser'
import { useForm } from '../../../hooks/useForm'
import { VALIDATION_RULES } from '../../../config/validateRules'
import { Link } from 'react-router-dom'
import { useEditUserMutation } from '../../../services/authApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { getFieldError, errorBorderClass } from '../../../utils/formErrors'
import { useState } from 'react'

const EditProfile = () => {
  const { user } = useAuthUser()

  const [editUser, { isLoading }] = useEditUserMutation()
  const navigate = useNavigate()

  const initialValues = {
    name: user?.name || '',
    email: user?.email || '',
    phone_number: user?.phone_number || '',
    address: user?.address || '',
  }

  const {
    formData,
    // setFormData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, VALIDATION_RULES.profileUpdate)

  // if (errors) {
  //   console.log('errors : ', errors)
  // }

  const [preview, setPreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setPreview(file)
  }

  const inputData = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Full Name',
    },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
    {
      name: 'phone_number',
      label: 'Phone Number',
      type: 'text',
      placeholder: 'Phone Number',
    },
  ]

  const profileImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAfUgd3DGwC1wGlGravbWznlbUvC8JYVmcO8Ct9dCi9rVWGnYNtOI7q53I0PHWhfv67FeuQpZ4MXu9_ez9fj36OKy6_JQEOLOFepSmLwDqID1ine6paubvj02wefUG7pF-sMZ7603Sv6KrsD-gnMXR3YSxqpd3010U3iWrcsd2nCA21ybDY7Uvt3W8mpa37aYbImmNjN5Q7iMqqh-kBFx1tUtrK6jwe7zat_5_xcnqb9K-UJycj824XDvbT44dx-wYOnyld4z91OI4'

  // Submit function receives actual formData
  const updateUser = async (data) => {
    try {
      const form = new FormData()
      form.append('name', data.name)
      form.append('email', data.email)
      form.append('phone_number', data.phone_number)
      form.append('image', preview)
      form.append('address', data.address)
      form.append('_method', 'PUT')

      await editUser(form).unwrap()
      toast.success('Profile updated successfully')
      navigate('/profile')
    } catch (err) {
      toast.error(err.data.message)
      if (err?.data) setErrors(err.data)
      console.log('error : ', err)
    }
  }
  return (
    <>
      <main className="flex flex-1 justify-center py-10 px-4">
        <div className="layout-content-container flex flex-col max-w-[640px] flex-1 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-[#e7edf3] dark:border-slate-800 h-fit">
          {/* Form Section */}
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(updateUser)}
          >
            {/* ProfileHeader Section */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="relative group">
                {/* Hidden file input */}
                <input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                  // later you can add: onChange={handleImageChange}
                />

                {/* Image Preview */}
                <label htmlFor="profile-image" className="cursor-pointer block">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 ring-4 ring-blue-400/10 transition-transform group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url("${
                        preview
                          ? URL.createObjectURL(preview)
                          : user?.image || profileImageUrl
                      }")`,
                    }}
                  ></div>

                  {/* Camera button */}
                  <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full border-4 border-white dark:border-slate-900 hover:bg-blue-600 transition-all shadow-md">
                    <span className="text-[20px]">📷</span>
                  </div>
                </label>
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

            {/* input field */}
            {inputData.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal">
                  {item.label}
                </label>
                <Input
                  name={item.name}
                  placeholder={item.placeholder}
                  handleChange={handleChange}
                  type={item.type}
                  value={formData[item.name]}
                  className={errorBorderClass(errors, item.name)}
                />
                {getFieldError(errors, item.name) && (
                  <p className="text-red-500 text-sm mt-1">
                    {getFieldError(errors, item.name)}
                  </p>
                )}
              </div>
            ))}

            {/* Address Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal">
                Address
              </label>
              <textarea
                className="form-input flex w-full rounded-lg text-[#0d141b] dark:text-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] min-h-[100px] p-4 text-base font-normal transition-all"
                placeholder="123 Sunset Avenue, Sangkat Boeung Keng Kang 1, Khan Chamkarmon, Phnom Penh, Cambodia"
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
              {getFieldError(errors, 'address') && (
                <p className="text-red-500 text-sm mt-1">
                  {getFieldError(errors, 'address')}
                </p>
              )}
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
              <Link
                className="flex-1 bg-[#f6f7f8] dark:bg-slate-800 text-[#0d141b] dark:text-slate-200 font-bold py-3 px-6 rounded-lg border border-[#cfdbe7] dark:border-slate-700 hover:bg-[#e7edf3] dark:hover:bg-slate-700 transition-colors text-center"
                to={'/profile'}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default EditProfile
