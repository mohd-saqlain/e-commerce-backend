const Order = require('../models/order');

const getAllOrders = async (req,res) => {
      try{
        const orders = await Order.find();
        res.status(200).json({status:true,message:"Fetched Successfully",data:orders});
      }
      catch(err){
        res.status(400).json({status:false,message:err.message});
      }   
} 

const createOrder = async (req,res) => {
    try{
        const newOrder = await Order.create({...req.body})
        if(!newOrder){
          return res.status(400).json({status:true,message:"API Under construction"});
        }
        res.status(200).json({status:true,message:"Captured Successfully",data:newOrder});
    }
    catch(err){
        res.status(400).json({status:false,message:err.message});
    }
}

module.exports = {getAllOrders,createOrder}