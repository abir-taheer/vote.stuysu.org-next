import { gql } from "apollo-server-micro";

export default gql`
  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String
    gradYear: Int
    adminRoles: [String]
    votedIn: [String]
  }
`;
