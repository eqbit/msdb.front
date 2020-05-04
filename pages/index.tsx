import React from 'react';
import { withApollo } from '../lib/apollo'
import Layout from '../src/components/layout'

const Home = () => {
  return (
    <Layout>
      <h1>Hello World👋</h1>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
