import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Booking from "./Booking/";
import Plan from "./Plan/";
import Vehical from "./Vehical";
import Slot from "./Slot/";

const resolvers = [User, Booking, Plan, Vehical, Slot];

export default mergeResolvers(resolvers);
