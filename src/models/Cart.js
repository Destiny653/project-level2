import mongoose ,{ Schema } from "mongoose";

const cartSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

},{timestamps:true});

export default mongoose.models.Cart || mongoose.model('Cart',  cartSchema)