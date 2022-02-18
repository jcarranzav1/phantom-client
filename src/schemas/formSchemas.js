import { object, ref, string } from 'yup';

export const SingInSchema = object()
  .shape({
    email: string().email('Insert a valid email').trim().required('Email is a required field'),
    password: string()
      /* .min(8, 'Password must be at least 8 charaters') */
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
        message:
          'Password  must contain 8 characters, one uppercase, one lowercase, one number and one special character',
      })
      .required('Password is a required field'),
    /* terms: boolean().oneOf([true], 'You must to accept the term of conditions').required(), */
  })
  .required();

export const SingUpSchema = object()
  .shape({
    confirmPassword: string()
      .oneOf([ref('password'), null], 'Passwords not match')
      .required('Please Confirm your Password'),
    email: string().email('Insert a valid email').trim().required('Email is a required field'),
    firstName: string().required('First Name is a required field'),
    lastName: string().required('Last Name is a required field'),
    password: string()
      /* .min(8, 'Password must be at least 8 charaters') */
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
        message:
          'Password  must contain 8 characters, one uppercase, one lowercase, one number and one special character',
      })
      .required('Password is a required field'),
  })
  .required();

export const EmailSchema = object()
  .shape({
    email: string().email('Insert a valid email').trim().required('Email is a required field'),
  })
  .required();

export const PassowrdlSchema = object()
  .shape({
    confirmPassword: string()
      .oneOf([ref('password'), null], 'Passwords not match')
      .required('Please Confirm your Password'),
    password: string()
      /* .min(8, 'Password must be at least 8 charaters') */
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
        message:
          'Password  must contain 8 characters, one uppercase, one lowercase, one number and one special character',
      })
      .required('Password is a required field'),
  })
  .required();
