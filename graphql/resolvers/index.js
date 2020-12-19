import Query from "./Query";
import Mutation from "./Mutation";
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import ObjectId from "graphql-scalar-objectid";

const resolvers = {
  Query,
  Mutation,
  ObjectId,
  Date: GraphQLDate,
  Time: GraphQLTime,
  GraphQLDateTime: GraphQLDateTime,
};

export default resolvers;
