import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../../lib/apollo';
import { PageContext } from '../../../src/types';
import {
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables
} from '../../../src/generated/types.d';
import { confirmEmailMutation } from '../../../graphql/user/mutations/confirmEmail';
import Layout from '../../../src/components/layout';
import { useRouter } from 'next/router';

type Props = {
  error?: string | null;
};

const Confirm: NextPage<Props> = ({ error }) => {
  const router = useRouter();
  
  useEffect(() => {
    if (!error) {
      router.push('/login');
    }
  });
  
  return (
    <Layout title="Email confirmation">
      <div>{error}</div>
    </Layout>
  )
};

Confirm.getInitialProps = async ({ query: { token }, apolloClient }: PageContext): Promise<Props> => {
  if (!token) {
    return {
      error: 'No token'
    };
  }
  
  try {
    const response = await apolloClient.mutate<ConfirmEmailMutation, ConfirmEmailMutationVariables>({
      mutation: confirmEmailMutation,
      variables: {
        token: `${token}`
      }
    });
    
    if (!response.data?.confirmEmail) {
      return {
        error: 'Email not found or token has expired'
      }
    }
    
    return {}
    
    
  } catch (error) {
    return {
      error: 'Something went wrong'
    }
  }
};

export default withApollo({ ssr: true })(Confirm);
