const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'Client',
        required:[true,"User is required"]
    },
    product:[{
        type:mongoose.Types.ObjectId,
        ref:'Order',
        required:[true,"User is required"]
    }],
    totalAmount:{
        type:String,
        required:[true,"Amount is required"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    }
});

module.exports = mongoose.model('Order',orderSchema);