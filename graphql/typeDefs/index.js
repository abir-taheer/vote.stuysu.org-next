import Mutation from "./Mutation";
import Query from "./Query";
import User from "./User";
import Election from "./Election";
import CloudinaryResource from "./CloudinaryResource";
import scalars from "./scalars";

const typeDefs = [CloudinaryResource, Election, Mutation, Query, User, scalars];

export default typeDefs;
