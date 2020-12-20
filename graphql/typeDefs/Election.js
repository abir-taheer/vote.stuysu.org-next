import { gql } from "apollo-server-micro";

export default gql`
  type Election {
    id: ObjectId
    name: String
    url: String
    start: DateTime
    end: DateTime
    allowedGradYears: [Int!]
    picture: CloudinaryResource
    complete: Boolean
  }
`;
