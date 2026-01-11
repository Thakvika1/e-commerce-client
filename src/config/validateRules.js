export const VALIDATION_RULES = {
  register: {
    name: {
      required: true,
      // onlyLetters: true,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minLength: 8,
    },
    confirm_password: {
      required: true,
      match: 'password',
    },
  },

  login: {
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minLength: 8,
    },
  },
}
