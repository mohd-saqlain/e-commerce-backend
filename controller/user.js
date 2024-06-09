const User = require("../models/user")
const Admin = require("../models/admin")
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
            id:userCreate._id
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

const createAdmin = async (req,res) => {
    try{
        const {userId,password} = req.body;
        const adminExist = await Admin.findOne({userId});
        if(adminExist){
            return res.status(400).json({status:false,message:"Admin already exists"})
        }
        const salt  = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);
        const createAdmin = await Admin.create({userId,password:hashedPass});
        if(!createAdmin){
            return res.status(400).json({status:false,message:"Some error occurred"})
        }
        res.status(201).json({status:false,message:"Admin created successfully"})
    }
    catch(err){
        res.status(400).json({status:false,message:err.message});
    }
}

const adminLogin = async (req,res) => {
    try{
        const {userId,password} = req.body;
        let admin = await Admin.findOne({ userId });
        if (!admin) {
          return res.status(400).json({ status:false,message:"Wrong credentials"});
        }
        const passComapre = await bcrypt.compare(password, admin.password);
        if (!passComapre) {
          return res.status(400).json({ status:false,message:"Wrong credentials" });
        }
        const data = {
            id:admin._id,
            type:"admin",
        }
        const authToken =  jwt.sign(data,JWT_SECRET);
        res.status(200).json({status:true,message:"Login successfully",authToken});
    }
    catch(err){
        res.status(400).json({status:false,message:err.message});
    }
}

module.exports = {createUser,createAdmin,adminLogin}