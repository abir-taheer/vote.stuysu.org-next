import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri =
	process.env.NODE_ENV === "production"
		? "https://next-vote.stuysu.org/api/graphql"
		: "http://localhost:3000/api/graphql";

const apolloClient = new ApolloClient({
	uri,
	cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
