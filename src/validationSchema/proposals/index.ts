import * as yup from 'yup';

export const proposalValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  status: yup.string().required(),
  submitted_at: yup.date().required(),
  content_id: yup.string().nullable().required(),
  submitted_by: yup.string().nullable().required(),
});
