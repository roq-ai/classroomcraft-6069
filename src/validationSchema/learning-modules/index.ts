import * as yup from 'yup';

export const learningModuleValidationSchema = yup.object().shape({
  module_type: yup.string().required(),
  duration: yup.number().integer().required(),
  objectives: yup.string().required(),
  resources: yup.string().required(),
  assessment: yup.string().required(),
  content_id: yup.string().nullable().required(),
  created_by: yup.string().nullable().required(),
});
