import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { PageContext } from '../../src/types';
import Layout from '../../src/components/layout';
import MovieDetail from '../../src/components/movies/movie-detail';

type Props = {
  id?: string;
};

const Movie: NextPage<Props> = ({ id }) => {
  return (
    <Layout title="Movie">
      {id ? (
        <MovieDetail id={id}/>
      ) : (
        <span>404</span>
      )}
    </Layout>
  )
};

Movie.getInitialProps = async ({ query: { id } }: PageContext): Promise<Props> => {
  return {
    id: Array.isArray(id) ? id[0] : id
  }
};

export default withApollo({ ssr: true })(Movie);
