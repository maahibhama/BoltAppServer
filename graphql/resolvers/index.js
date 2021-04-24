import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Booking from "./Booking/";
import Plan from "./Plan/";

const resolvers = [User, Booking, Plan];

export default mergeResolvers(resolvers);
