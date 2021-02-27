import CloudinaryResource from "./CloudinaryResource";
import Election from "./Election";
import Query from "./Query";
import Mutation from "./Mutation";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";
import ObjectId from "graphql-scalar-objectid";

const resolvers = {
    CloudinaryResource,
    Election,
    Query,
    Mutation,
    ObjectId,
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime,
};

export default resolvers;
