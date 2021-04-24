import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Booking from "./Booking/";
import Plan from "./Plan/";
import Vehical from "./Vehical/";
import Slot from "./Slot/";

const typeDefs = [User, Booking, Plan, Vehical, Slot];

export default mergeTypes(typeDefs, { all: true });
