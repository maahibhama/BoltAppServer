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
    booking(id: String!): Booking
    bookings: [Booking]
    filterBooking(slot_id: String, price: String, payment_mode: String, payment_status: String, status: String): [Booking]
  }
  type Mutation {
    addBooking(name: String!, orignalprice: String!, discountInPercentage: String, description: String!, category: String!, company: String!, type: String!, rating: String, ratingType: String, availableSize: [String]!, availableColor: [String]!): Booking
    editBooking(id: String!, name: String, orignalprice: String, discountInPercentage: String, description: String, category: String, company: String, type: String, rating: Float, ratingType: String, availableSize: [String], availableColor: [String]): Booking
    deleteBooking(id: String): Booking
  }
`;