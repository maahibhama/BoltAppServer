import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Item from "./Item";
import UserItem from "./UserItem";

const typeDefs = [User, Item, UserItem];

export default mergeTypes(typeDefs, { all: true });