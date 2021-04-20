export default `
  type Booking {
    id: String!
    slot_id: String!
    price: String!
    description: String!
    payment_mode: String!
    payment_status: String!
    status: String!
    washer_rating: String!
    plan_rating: String!
    washer_rating_comment: String!
    plan_rating_comment: String!
  }
  type Query {
    booking(id: String!): Item
    userBookings: [Item]
    filterItem(name: String, category: String, company: String, type: String, size: [String], color: [String], rating: String): [Item]
  }
  type Mutation {
    addBooking(name: String!, orignalprice: String!, discountInPercentage: String, description: String!, category: String!, company: String!, type: String!, rating: String, ratingType: String, availableSize: [String]!, availableColor: [String]!): Item
    editBooking(id: String!, name: String, orignalprice: String, discountInPercentage: String, description: String, category: String, company: String, type: String, rating: Float, ratingType: String, availableSize: [String], availableColor: [String]): Item
    deleteBooking(id: String): Item
  }
`;