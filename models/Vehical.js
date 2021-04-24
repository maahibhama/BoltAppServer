import mongoose from "mongoose";
import Slot from "./Slot";

const Schema = mongoose.Schema;

// Create the Item Schema.
const VehicalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  vehical_no: {
    type: String,
    required: true,
  },
  client_id: {
    type: String,
    required: true,
  },
  slots: {
    type: [Slot],
    default: []
  }
});

const Vehical = mongoose.model("Vehical", VehicalSchema);

export default Vehical;
