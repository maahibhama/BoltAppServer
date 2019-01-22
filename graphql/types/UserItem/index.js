export default `
  type UserItem {
    userId: String!
    faviouriteItems: [String]
    cartItems:[CartItem]
    createDate: String
    updateDate: String
  }
  type CartItem {
    itemId: String
    count: Int
  }
  type Query {
    userItem(userId: String!): UserItem
  }
  type Mutation {
    addFaviouriteItem(userId: String!, itemId: String!): UserItem
    addCartItem(userId: String!, itemId: String!): UserItem
    deleteFavioriteItem(userId: String!, itemId: String!): UserItem
    deleteCartItem(userId: String!, itemId: String!): UserItem
  }
`;

/* addCartItem(userId: String!, itemId: String!)
    deleteFavioriteItem(userId: String!, itemId: String!)
    deleteCartItem(userId: String!, itemId: String!)*/