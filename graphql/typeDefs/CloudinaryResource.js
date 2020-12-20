import {gql} from "apollo-server-micro";

export default gql`
    type CloudinaryResource {
        publicId: String!
        width: Int!
        height: Int!
        format: String!
        resourceType: String!
        createdAt: DateTime
        url: String!
    }
`;