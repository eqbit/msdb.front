import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PageContext } from '../../../src/types';
import { logoutMutation } from '../../../graphql/user/mutations/logout';
import { withApollo } from '../../../lib/apollo';

const Logout: NextPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/');
  }, []);
  
  return null;
};

Logout.getInitialProps = async ({ apolloClient }: PageContext) => {
  await apolloClient.mutate({ mutation: logoutMutation });
  await apolloClient.resetStore();
  
  return {};
};

export default withApollo()(Logout);
