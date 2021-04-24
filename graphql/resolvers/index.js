import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Booking from "./Booking/";

const resolvers = [User, Booking];

export default mergeResolvers(resolvers);