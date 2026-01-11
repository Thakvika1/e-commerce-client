export const getFieldError = (errors, name) => {
  return (
    // backend error
    errors?.errors?.[name]?.[0] ||
    // frontend error
    errors?.[name] ||
    // backend error
    errors?.message ||
    // if not error
    null
  )
}

export const errorBorderClass = (errors, name) => {
  return getFieldError(errors, name) ? '!border-red-500' : ''
}
