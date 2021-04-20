import mongoose from "mongoose";
import Plan from "./Plan";

const Schema = mongoose.Schema;

// Create the User Schema.
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  updateDate: {
    type: Date,
    default: Date.now(),
  },
  receiveNotification: {
    type: Boolean,
    default: false,
  },
  receiveNewsletters: {
    type: Boolean,
    default: false,
  },
  receiveSpecialOffer: {
    type: Boolean,
    default: false,
  },
  participateBetaProgramme: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "Client",
  },
  rating: {
    type: String,
    default: "0.0",
  },
  rating_comments: {
    type: [String],
    default: "",
  },
  company_name: {
    type: String,
    default: "",
  },

});

const User = mongoose.model("User", UserSchema);

export default User;
