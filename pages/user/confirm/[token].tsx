import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../../lib/apollo';
import { PageContext } from '../../../src/types';
import {
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables
} from '../../../src/generated/types.d';
import { confirmEmailMutation } from '../../../graphql/user/mutations/confirmEmail';
import Layout from '../../../src/components/Layout';

type Props = {
  success?: boolean;
  error?: string | null;
};

const Confirm: NextPage<Props> = (props) => {
  return (
    <Layout title="Email confirmation">
      {props.success ? (
        <div>
          success
        </div>
      ) : (
        <div>{props.error}</div>
      )}
    </Layout>
  )
};

Confirm.getInitialProps = async ({ query: { token }, apolloClient }: PageContext): Promise<Props> => {
  if (!token) {
    return {
      success: false,
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
    
    return {
      success: response.data!.confirmEmail,
      error: !response.data!.confirmEmail ? 'Email not found or token has expired' : null
    }
  } catch (error) {
    return {
      success: false,
      error: 'Something went wrong'
    }
  }
};

export default withApollo({ ssr: true })(Confirm);
