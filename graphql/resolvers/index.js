import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Booking from "./Booking/";
import Plan from "./Plan/";
import Vehical from "./Vehical/";

const resolvers = [User, Booking, Plan, Vehical];

export default mergeResolvers(resolvers);
