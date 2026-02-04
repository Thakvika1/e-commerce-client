export const validateForm = (values, rules) => {
  const errors = {}

  for (const field in rules) {
    const value = values[field]
    const fieldRules = rules[field]

    // required
    if (fieldRules.required && !value?.trim()) {
      errors[field] = `${field} is required`
      continue
    }

    // min length
    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] =
        `${field} must be at least ${fieldRules.minLength} characters`
      continue
    }

    // max length
    if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
      errors[field] =
        `The field must be no more than ${fieldRules.maxLength} characters`
      continue
    }

    // email
    if (fieldRules.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        errors[field] = 'Invalid email address'
        continue
      }
    }

    // letters only
    if (fieldRules.onlyLetters) {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        errors[field] = `${field} must contain only letters`
        continue
      }
    }

    // match field (password confirm)
    if (fieldRules.match) {
      if (value !== values[fieldRules.match]) {
        errors[field] = `${fieldRules.match} does not match`
      }
    }

    // phone number
    // if (fieldRules.phone) {
    //   const phoneRegex = /^\+?[1-9]\d{1,14}$/
    //   if (value && !phoneRegex.test(value)) {
    //     errors[field] = 'Invalid phone number'
    //     continue
    //   }
    // }

    // min
    if (fieldRules.min && value < fieldRules.min) {
      errors[field] = `The field must be more than ${fieldRules.min}`
      continue
    }

    // max
    if (fieldRules.max && value > fieldRules.max) {
      errors[field] = `The field must be no more than ${fieldRules.max}`
      continue
    }

    // numeric
    if (fieldRules.numeric) {
      if (isNaN(value)) {
        errors[field] = `${field} must be a number`
        continue
      }
    }
  }

  return errors
}
