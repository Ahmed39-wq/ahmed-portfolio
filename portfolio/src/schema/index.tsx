import * as yup from 'yup'

export const emailSchema = yup.object().shape({
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string().required("Please enter last name"),
    email: yup.string().email().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email address').required("Please enter valid email address"),
    subject: yup.string(),
    message: yup.string().required('Message is required')
  });

  export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}