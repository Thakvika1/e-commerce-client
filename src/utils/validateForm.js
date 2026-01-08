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
      errors[
        field
      ] = `${field} must be at least ${fieldRules.minLength} characters`
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
  }

  return errors
}
