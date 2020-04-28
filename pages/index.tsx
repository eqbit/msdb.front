import React from 'react';
import { withApollo } from '../lib/apollo'

import Layout from '../src/components/Layout'
import { LoginComponent } from '../src/generated/types.d';

const Button = ({ mutate }: any) => {
  const handleLogin = async () => {
    const response = await mutate({
      variables: {
        email: 'test3@test.test',
        password: 'testsetse'
      }
    });
  
    console.log(response);
  };
  
  return (
    <button onClick={handleLogin}>login</button>
  )
};

const Home = () => {
  
  
  return (
    <Layout title="MSDB app">
      <h1>Hello World 👋</h1>
      <p>
        <LoginComponent>
          {
            (mutate) => (
              <Button mutate={mutate}/>
            )
          }
        </LoginComponent>
      </p>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
