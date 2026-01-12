const auth = (errors, name, authName) => {
  return authName == 'login'
    ? errors?.errors?.[name]?.[0] || errors?.message
    : errors?.errors?.[name]?.[0] && errors?.message
}

export const getFieldError = (errors, name, authName) => {
  return (
    // frontend error
    errors?.[name] ||
    // backend error
    auth(errors, name, authName) ||
    // if not error
    null
  )
}

export const errorBorderClass = (errors, name, authName) => {
  return getFieldError(errors, name, authName) ? '!border-red-500' : ''
}
