export default `
  type Item {
    id: String!
    name: String!
    orignalprice: String!
    description: String!
    category: String!
    company: String!
    type: String!
    discountInPercentage: String
    rating: String
    ratingType: String
    availableSize: [String]!
    availableColor: [String]!
    createDate: String
    updateDate: String
  }
  type Query {
    item(id: String!): Item
    items: [Item]
    filterItem(name: String, category: String, company: String, type: String, size: [String], color: [String], rating: String): [Item]
  }
  type Mutation {
    addItem(name: String!, orignalprice: String!, discountInPercentage: String, description: String!, category: String!, company: String!, type: String!, rating: String, ratingType: String, availableSize: [String]!, availableColor: [String]!): Item
    editItem(id: String!, name: String, orignalprice: String, discountInPercentage: String, description: String, category: String, company: String, type: String, rating: Float, ratingType: String, availableSize: [String], availableColor: [String]): Item
    deleteItem(id: String): Item
  }
`;