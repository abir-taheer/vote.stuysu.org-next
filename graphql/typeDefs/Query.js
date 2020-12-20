import { gql } from "apollo-server-micro";

export default gql`
  type Query {
    userById(id: ObjectId!): User

    electionById(id: ObjectId!): Election
    electionByUrl(url: String!): Election
  }
`;
