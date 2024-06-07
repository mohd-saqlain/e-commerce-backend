const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,"User is required"]
    },
    products:[{
        product:{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        required:[true,"User is required"]
    },
    quantity:{
        type:String,
    }
}],
    totalAmount:{
        type:String,
        required:[true,"Amount is required"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    }
},{
    timestamps:true,
});

module.exports = mongoose.model('Order',orderSchema);