import { useState, useRef } from 'react'
// import { getFieldError } from '../utils/formErrors'
import { validateForm } from '../utils/validateForm'

export const useForm = (initialValues, rules) => {
  const [formData, setFormData] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const isSubmittingRef = useRef(false)

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

  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault()

    // BLOCK double submit
    if (isSubmittingRef.current) return

    const validationErrors = validateForm(formData, rules)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      isSubmittingRef.current = true // LOCK submit
      await onSubmit(formData)
    } finally {
      isSubmittingRef.current = false // UNLOCK after done
    }

    // onSubmit(formData)
  }

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  }
}
