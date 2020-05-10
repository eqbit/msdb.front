import React from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import { withApollo } from '../../../lib/apollo';
import { ChangePasswordComponent } from '../../../src/generated/types.d';
import TextInput from '../../../src/components/form/text-input';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { PageContext } from '../../../src/types';
import Layout from '../../../src/components/layout';

type Values = {
  password: string;
};

const initialValues: Values = {
  password: ''
};

type Props = {
  token?: string;
};

const ChangePassword: NextPage<Props> = ({ token }) => {
  const router = useRouter();
  
  return (
    <Layout title="Change password page">
      <ChangePasswordComponent>
        {(restorePassword) => {
          const onSubmit = async (data: Values, { setErrors }: FormikHelpers<Values>) => {
            try {
              await restorePassword({
                variables: {
                  data: {
                    password: data.password,
                    token: token!
                  }
                }
              });
              
              await router.push('/');
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
                      name="password"
                      component={TextInput}
                      label="Password"
                      id="register-form-password"
                    />
                    <button type="submit">Change password</button>
                  </form>
                )
              }
            </Formik>
          );
        }}
      </ChangePasswordComponent>
    </Layout>
  )
};

ChangePassword.getInitialProps = async ({ query: { token } }: PageContext): Promise<Props> => {
  return {
    token: `${token}`
  };
};

export default withApollo({ ssr: true })(ChangePassword);
