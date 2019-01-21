export default `
  type UserItem {
    userId: String!
    faviouriteItems: [String]
    cartItems:[String]
    createDate: String
    updateDate: String
  }
  type Query {
    userItem(userId: String!): UserItem
  }
  type Mutation {
    addFaviouriteItem(userId: String!, itemId: String!): UserItem
    addCartItem(userId: String!, itemId: String!): UserItem
    deleteFavioriteItem(userId: String!, itemId: String!): UserItem
  }
`;

/* addCartItem(userId: String!, itemId: String!)
    deleteFavioriteItem(userId: String!, itemId: String!)
    deleteCartItem(userId: String!, itemId: String!)*/