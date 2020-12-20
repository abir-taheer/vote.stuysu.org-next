import { gql } from "apollo-server-micro";

export default gql`
  type Query {
    user(id: ObjectId!): User
    election(id: ObjectId): Election
  }
`;
