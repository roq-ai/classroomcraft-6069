import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { learningModuleValidationSchema } from 'validationSchema/learning-modules';
import { ContentInterface } from 'interfaces/content';
import { UserInterface } from 'interfaces/user';
import { LearningModuleInterface } from 'interfaces/learning-module';

function LearningModuleCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: LearningModuleInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.learning_module.create({ data: values as RoqTypes.learning_module });
      resetForm();
      router.push('/learning-modules');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<LearningModuleInterface>({
    initialValues: {
      module_type: '',
      duration: 0,
      objectives: '',
      resources: '',
      assessment: '',
      content_id: (router.query.content_id as string) ?? null,
      created_by: (router.query.created_by as string) ?? null,
    },
    validationSchema: learningModuleValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Learning Modules',
              link: '/learning-modules',
            },
            {
              label: 'Create Learning Module',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Learning Module
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.module_type}
            label={'Module Type'}
            props={{
              name: 'module_type',
              placeholder: 'Module Type',
              value: formik.values?.module_type,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Duration"
            formControlProps={{
              id: 'duration',
              isInvalid: !!formik.errors?.duration,
            }}
            name="duration"
            error={formik.errors?.duration}
            value={formik.values?.duration}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('duration', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.objectives}
            label={'Objectives'}
            props={{
              name: 'objectives',
              placeholder: 'Objectives',
              value: formik.values?.objectives,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.resources}
            label={'Resources'}
            props={{
              name: 'resources',
              placeholder: 'Resources',
              value: formik.values?.resources,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.assessment}
            label={'Assessment'}
            props={{
              name: 'assessment',
              placeholder: 'Assessment',
              value: formik.values?.assessment,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<ContentInterface>
            formik={formik}
            name={'content_id'}
            label={'Select Content'}
            placeholder={'Select Content'}
            fetcher={() => roqClient.content.findManyWithCount({})}
            labelField={'title'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'created_by'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/learning-modules')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'learning_module',
    operation: AccessOperationEnum.CREATE,
  }),
)(LearningModuleCreatePage);
