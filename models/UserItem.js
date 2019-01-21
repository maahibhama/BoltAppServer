import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the UserItem Schema.
const UserItemSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    faviouriteItems: {
        type: [String],
        default: []
    },
    cartItems: {
        type: [String],
        default: []
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    updateDate: {
        type: Date,
        default: Date.now()
    },
});

const UserItem = mongoose.model("UserItem", UserItemSchema);

export default UserItem;