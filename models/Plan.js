import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Item Schema.
const PlanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    default: "0.0",
  },
  rating_comments: {
    type: [String],
    default: "",
  },
});

const Plan = mongoose.model("Plan", PlanSchema);

export default Plan;
