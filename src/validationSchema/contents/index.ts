import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  subject: yup.string().required(),
  grade_level: yup.number().integer().required(),
  created_by: yup.string().nullable().required(),
});
