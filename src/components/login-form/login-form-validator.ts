export const loginFormValidator = {
  email: {
    required: 'Email is required.',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'Pleas enter a valid email address.',
    },
  },
  password: {
    required: 'Password is required.',
    minLength: {
      value: 8,
      message: 'Pleas enter a valid password.',
    },
  },
};
