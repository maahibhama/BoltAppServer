import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Booking from "./Booking/";

const typeDefs = [User, Booking];

export default mergeTypes(typeDefs, { all: true });