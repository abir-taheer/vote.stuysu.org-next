import { gql } from "apollo-server-micro";

export default gql`
  type Mutation {
    # Takes an ID Token from Google and returns a JWT
    login(idToken: String!): String!

    # Takes in a JWT
    refreshJWT: String!
  }
`;
