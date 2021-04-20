import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Item Schema.
const SlotSchema = new Schema({
  startTime: {
    type: Date,
    default: Date.now(),
  },
  durationInMinutes: {
    type: Number,
    default: 60,
  },
  washer_id: {
    type: String,
    default: null,
  },
  client_id: {
    type: String,
    default: null,
  },
  vehical_id: {
    type: String,
    default: null,
  },
  availbility: {
    type: Boolean,
    default: true,
  },
  plan_id: {
    type: String,
    default: null,
  },
  booking_id: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const Slot = mongoose.model("Slot", SlotSchema);

export default Slot;
