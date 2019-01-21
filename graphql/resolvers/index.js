import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Item from "./Item";
import UserItem from "./UserItem";

const resolvers = [User, Item, UserItem];

export default mergeResolvers(resolvers);