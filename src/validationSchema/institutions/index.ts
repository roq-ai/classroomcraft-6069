import * as yup from 'yup';

export const institutionValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  website: yup.string().nullable(),
  established_on: yup.date().nullable(),
  name: yup.string().required(),
});
