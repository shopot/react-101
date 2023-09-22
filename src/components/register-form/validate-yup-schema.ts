import * as Yup from 'yup';

export const validateYupSchema = Yup.object({
  name: Yup.string().required('Name is required.').min(4, 'Name must be at least 4 characters'),
  email: Yup.string().email('Pleas enter a valid email address.').required('Email is required.'),
  password: Yup.string()
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.'
    )
    .required('Please enter a password'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required('Confirm password is required.'),
  age: Yup.number()
    .typeError('Age must be a number')
    .positive('Age must be greater than zero')
    .required('Age is required'),
  country: Yup.string().required('Country is required'),
  tos: Yup.bool().oneOf([true], 'The Terms of service must be accepted.').required(),
}).required();
