import React from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import Layout from '../../../src/components/layout';
import { withApollo } from '../../../lib/apollo';
import { ForgotPasswordComponent } from '../../../src/generated/types.d';
import TextInput from '../../../src/components/form/text-input';

type Values = {
  email: string;
};

const initialValues: Values = {
  email: ''
};

const RestorePassword = () => {
  const router = useRouter();
  
  return (
    <Layout title="Forgot password page">
      <ForgotPasswordComponent>
        {(restorePassword) => {
          const onSubmit = async (data: Values, { setErrors }: FormikHelpers<Values>) => {
            try {
              await restorePassword({
                variables: data
              });
              
              await router.push('/register/success');
            } catch (error) {
              const errors: Record<string, string> = {};
              const validationErrors = error.graphQLErrors[0].extensions.exception.validationErrors;
              
              validationErrors.forEach((validationError: any) => {
                Object.values(validationError.constraints).forEach((constraint: any) => {
                  errors[validationError.property] = constraint;
                })
              });
              
              setErrors(errors);
            }
          };
          
          return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {
                ({
                   handleSubmit
                 }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="email"
                      placeholder="example@mail.com"
                      component={TextInput}
                      label="Email"
                      id="register-form-email"
                    />
                    <button type="submit">Restore password</button>
                  </form>
                )
              }
            </Formik>
          );
        }}
      </ForgotPasswordComponent>
    </Layout>
  )
};



export default withApollo()(RestorePassword);
