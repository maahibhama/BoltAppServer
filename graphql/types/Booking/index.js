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
    addBooking(id: String!
      slot_id: String!
      price: String!
      description: String!
      payment_mode: String!
      payment_status: String!
      status: String!
      washer_rating: String!
      plan_rating: String!
      washer_rating_comment: String!
      plan_rating_comment: String!): Booking
    editBooking(id: String!
      slot_id: String!
      price: String!
      description: String!
      payment_mode: String!
      payment_status: String!
      status: String!
      washer_rating: String!
      plan_rating: String!
      washer_rating_comment: String!
      plan_rating_comment: String!): Booking
    deleteBooking(id: String): Booking
  }
`;
