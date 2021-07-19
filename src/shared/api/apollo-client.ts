import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_DOMAIN } from "../constants/environment-constants";

/* const httpLink = createHttpLink({
  uri: `${API_DOMAIN}/graphql`,
}); */

export const apolloClient = new ApolloClient({
  uri: `${API_DOMAIN}/graphql`,
  cache: new InMemoryCache(),
});
