export const VALIDATION_RULES = {
  register: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 25,
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

  profileUpdate: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 25,
      // onlyLetters: true,
    },
    email: {
      required: true,
      email: true,
    },
    phone_number: {
      required: false,
      // phone: true,
      maxLength: 15,
    },
    address: {
      required: false,
      maxLength: 150,
    },
  },

  createProduct: {
    name: {
      required: true,
      minLength: 5,
      maxLength: 50,
      // onlyLetters: true,
    },
    price: {
      required: true,
      numeric: true,
      min: 1,
      max: 1000000,
    },
    stock: {
      required: true,
      numeric: true,
      min: 1,
    },
    category_id: {
      required: true,
      numeric: true,
    },
    description: {
      required: false,
      // minLength: 10,
      maxLength: 300,
    },
  },
}
