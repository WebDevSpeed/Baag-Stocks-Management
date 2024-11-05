import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    id : {
        type : String,
        unique : true,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    size : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    imgUrl : {
        type : String,
        required : true
    }

})

const Product = mongoose.model('Product', productSchema);

export default Product;

