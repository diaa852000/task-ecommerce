import { ApolloClient, InMemoryCache } from "@apollo/client";


const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    // uri: "https://sumptuous-camps.000webhostapp.com/graphql",
    // uri: 'https://sumptuous-camps.000webhostapp.com/graphql',
    cache: new InMemoryCache(),
});

export default apolloClient;