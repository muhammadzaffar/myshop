import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    discount:{
        type: Number,
        default: 0
    },
    bgColor: String,
    panelColor:String,
    textColor:String,

});

const product = mongoose.model("product", productSchema);

export default product;