import React from 'react';
import { LoggedComponent } from '../../../src/generated/types.d';
import { withApollo } from '../../../lib/apollo';
import Layout from '../../../src/components/Layout';

const Hello = () => {
  return (
    <Layout title="hello">
      <LoggedComponent>
        {({data}) => (
          <div>{data && data.logged ? data.logged.id : '...loading'}</div>
        )}
      </LoggedComponent>
    </Layout>
  )
};

export default withApollo()(Hello);
