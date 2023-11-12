import * as yup from 'yup';

export const lessonPlanValidationSchema = yup.object().shape({
  duration: yup.number().integer().required(),
  objectives: yup.string().required(),
  resources: yup.string().required(),
  assessment: yup.string().required(),
  content_id: yup.string().nullable().required(),
  created_by: yup.string().nullable().required(),
});
