import { NextPageContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';

export interface PageContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
