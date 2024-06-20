import { ApolloClient, InMemoryCache } from "@apollo/client";


const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    // uri: 'http://diaamohamed85-001-site1.ctempurl.com/public/index.php/graphql',
    // uri: '/public/index.php/graphql',
    cache: new InMemoryCache(),
});

export default apolloClient;