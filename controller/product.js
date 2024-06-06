const Product = require('../models/product');

const getAllProduct = async (req,res) => {
      try{
        const products = await Product.find();
        res.status(200).json({status:true,message:"Fetched Successfully",data:products});
      }
      catch(err){
        res.status(400).json({status:false,message:err.message});
      }   
}

const addProduct = async (req,res) => {
  try{
    const add = await Product.create({...req.body});
    if(!add){
      return res.status(400).json({status:false,message:"Unable to Add Product"});
    }
    res.status(200).json({status:true,message:'Added successfully'});
  }
  catch(err){
    res.status(400).json({status:false,message:err.message});
  }
}

module.exports = {getAllProduct,addProduct}