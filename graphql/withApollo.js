import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.GRAPHQL_URI || "http://localhost:3000/api/graphql";

const apolloClient = new ApolloClient({
	uri,
	cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
