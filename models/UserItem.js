import mongoose from "mongoose";

const Schema = mongoose.Schema;


const CartItemSchema = new Schema({
    itemId: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 1
    }
});

export const CartItem = mongoose.model("CartItem", CartItemSchema);

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
        type: [CartItemSchema],
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