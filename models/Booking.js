import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Item Schema.
const BookingSchema = new Schema({
  slot_id: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  payment_mode: {
    type: String,
    required: true,
  },
  payment_status: {
    type: String,
    default: "Pending",
  },
  status: {
    type: String,
    default: "Pending",
  },
  washer_rating: {
    type: String,
    default: "0.0",
  },
  plan_rating: {
    type: String,
    default: "0.0",
  },
  washer_rating_comment: {
    type: String,
    default: "",
  },
  plan_rating_comment: {
    type: String,
    default: "",
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
