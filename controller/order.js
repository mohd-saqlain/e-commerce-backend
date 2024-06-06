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

const createOrder = async () => {
    try{
        res.status(200).json({status:true,message:"API Under construction"});
    }
    catch(err){
        res.status(400).json({status:false,message:err.message});
    }
}

module.exports = {getAllOrders,createOrder}