import React, {FC, PropsWithChildren} from 'react';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {useUserStore} from './store/userStore';
import appConfig from './config/dev-config';

const httpLink = new HttpLink({
  uri: appConfig.API_URL,
});

const Apollo: FC<PropsWithChildren> = ({children}) => {
  const {user: {accessToken} = {}} = useUserStore();

  const authLink = new ApolloLink((operation, forward) => {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink), // Chain it with the HttpLink
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
