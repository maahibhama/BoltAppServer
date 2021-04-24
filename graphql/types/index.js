import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Booking from "./Booking/";
import Plan from "./Plan/";

const typeDefs = [User, Booking, Plan];

export default mergeTypes(typeDefs, { all: true });
