import { NextPage } from 'next';
import { PageContext } from '../../../src/types';
import { logoutMutation } from '../../../graphql/user/mutations/logout';
import { useRouter } from 'next/router';
import { withApollo } from '../../../lib/apollo';
import { useEffect } from 'react';

const Logout: NextPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/');
  }, [])
  
  return null;
};

Logout.getInitialProps = async ({ apolloClient }: PageContext) => {
  await apolloClient.mutate({ mutation: logoutMutation });
  await apolloClient.resetStore();
  
  return {};
};

export default withApollo()(Logout);
