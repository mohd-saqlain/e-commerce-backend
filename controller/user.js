const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mynameismohdsaqlain";

const createUser = async (req,res) => {
    try{
        const {name,phoneNo,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt)
        const userCreate = await User.create({name,phoneNo,password:hashedPass});
        if(!userCreate){
            res.status(400).json({status:false,message:"Some error occurred"})
        }
        const data = {
            _id:userCreate._id
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.status(201).json({status:true,message:"User created successfully",authtoken,data:userCreate});
    }
    catch(err){
        if(err?.code === 11000){
           return res.status(400).json({status:false,message:"Phone number already exists"});    
        }
        res.status(400).json({status:false,message:err.message});
    }
}

module.exports = {createUser}