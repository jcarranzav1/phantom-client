import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import { BASE_URL } from '../session/consts';
import { getSession } from '../session/session';

const httpLink = createUploadLink({ uri: BASE_URL });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const token = getSession();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
