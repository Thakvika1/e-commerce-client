import { useState } from 'react'
// import { getFieldError } from '../utils/formErrors'
import { validateForm } from '../utils/validateForm'

export const useForm = (initialValues, rules) => {
  const [formData, setFormData] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }))
  }

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault()

    const validationErrors = validateForm(formData, rules)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onSubmit(formData)
  }

  return {
    formData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  }
}
