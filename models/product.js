const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name is required"]
    },
    price:{
        type:String,
        required:[true,"Product Price is required"]
    },
    description:{
        type:String
    }
},{
    timestamps:true
} 
);

module.exports = mongoose.model('Product',productSchema);