import React from 'react';
import { withApollo } from '../lib/apollo'

import Layout from '../src/components/Layout'
import { LoginComponent } from '../src/generated/types.d';

const Button = () => {
  return (
    <LoginComponent>
      {
        (mutate) => {
          const handleLogin = async () => {
            const response = await mutate({
              variables: {
                email: 'fdhfgh@fdsfsd.fdg',
                password: 'fdhfgh@fdsfsd.fdg'
              }
            });
    
            console.log(response.data?.login);
          };
          
          return <button onClick={handleLogin}>login</button>
        }
      }
    </LoginComponent>
  )
};

const Home = () => {
  
  
  return (
    <Layout title="MSDB app">
      <h1>Hello World 👋</h1>
      <p>
        <Button/>
      </p>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
