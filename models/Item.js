import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Item Schema.
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    orignalprice: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageUrls: {
        type: [String],
        required: true
    },
    discountInPercentage: {
        type: String,
        default: "0.0"
    },
    rating: {
        type: String,
        default: "0.0"
    },
    ratingType: {
        type: String,
        default: "Normal"
    },
    availableSize: {
        type: [String],
        default: ["S", "M", "L", "XL", "XLL"]
    },
    availableColor: {
        type: [String],
        default: ["RED", "GREEN", "BLUE"]
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    updateDate: {
        type: Date,
        default: Date.now()
    },
    availability: {
        type: Boolean,
        default: true
    }
});

const Item = mongoose.model("Item", ItemSchema);

export default Item;