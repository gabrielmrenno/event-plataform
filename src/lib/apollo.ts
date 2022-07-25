import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl6191y644sae01ukfqyo55ec/master',
    cache: new InMemoryCache(),
});