import mongoose ,{ Schema } from "mongoose";

const productSchema = new Schema({
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
    rate: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    } 
},{timestamps:true});

export default mongoose.models.Product || mongoose.model('Product',  productSchema)