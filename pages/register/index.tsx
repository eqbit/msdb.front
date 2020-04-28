import React from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import Layout from '../../src/components/Layout';
import { withApollo } from '../../lib/apollo';
import { RegisterComponent } from '../../src/generated/types.d';

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialValues: Values = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const Register = () => {
  return (
    <Layout title="Register page">
      <RegisterComponent>
        {(register) => {
          const onSubmit = async (data: Values, { setErrors }: FormikHelpers<Values>) => {
            try {
              const response = await register({
                variables: {
                  data
                }
              });
  
              console.log(response);
            } catch (error) {
              const errors: Record<string, string> = {};
              const validationErrors = error.graphQLErrors[0].extensions.exception.validationErrors;
              
              validationErrors.forEach((validationError: any) => {
                Object.values(validationError.constraints).forEach((constraint: any) => {
                  errors[validationError.property] = constraint;
                })
              });
  
              console.log(errors);
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
                    <Field name="firstName" placeholder="First name"/>
                    <Field name="lastName" placeholder="last name"/>
                    <Field name="email" placeholder="Email"/>
                    <Field name="password" type="password"/>
                    <button type="submit">submit</button>
                  </form>
                )
              }
            </Formik>
          )
        }}
      </RegisterComponent>
    </Layout>
  )
};

export default withApollo()(Register);
