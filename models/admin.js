const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:[true,"User ID is required"],
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true
} 
);

module.exports = mongoose.model('Admin',adminSchema);