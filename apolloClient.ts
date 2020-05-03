import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { NextPageContext } from 'next';

export default function createApolloClient(initialState: any, ctx: NextPageContext) {
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: createHttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'include',
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  })
}
