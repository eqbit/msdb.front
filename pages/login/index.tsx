import React from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import Layout from '../../src/components/Layout';
import { withApollo } from '../../lib/apollo';
import { LoggedQuery, LoginComponent } from '../../src/generated/types.d';
import TextInput from '../../src/components/form/text-input';
import { useRouter } from 'next/router';
import { helloQuery } from '../../graphql/user/queries/hello';
import { useDispatch } from 'react-redux';
import { setUserLoggedStatus } from '../../src/redux/actions/user';

type Values = {
  email: string;
  password: string;
};

const initialValues: Values = {
  email: '',
  password: ''
};

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  return (
    <Layout title="Login page">
      <LoginComponent>
        {(login) => {
          const onSubmit = async (data: Values, { setErrors }: FormikHelpers<Values>) => {
            const response = await login({
              variables: data,
              update: (cache, {data}) => {
                if (!data || !data.login) {
                  return;
                }
  
                dispatch(setUserLoggedStatus(true));
                
                cache.writeQuery<LoggedQuery>({
                  query: helloQuery,
                  data: {
                    __typename: 'Query',
                    logged: data.login
                  }
                })
              }
            });
            
            if (!response?.data?.login) {
              setErrors({
                email: 'Invalid email/password pair'
              });
              
              return;
            }
  
            await router.push('/');
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
                    
                    <Field
                      name="password"
                      type="password"
                      component={TextInput}
                      label="Password"
                      id="register-form-password"
                    />
                    
                    <button type="submit">Login</button>
                  </form>
                )
              }
            </Formik>
          );
        }}
      </LoginComponent>
    </Layout>
  )
};

export default withApollo()(Register);
