import React from 'react';
import { withApollo } from '../lib/apollo'
import Layout from '../src/components/layout'
import MoviesList from '../src/components/movies/movies-list';

const Home = () => {
  
  return (
    <Layout>
      <MoviesList/>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Home);
