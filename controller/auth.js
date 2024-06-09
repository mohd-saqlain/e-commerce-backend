const jwt = require("jsonwebtoken");
const JWT_SECRET = "mynameismohdsaqlain";

const verifyToken = async (req,res,next) => {
    try{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token){
        return res.status(400).json({status:false,message:"You're not logged in"})
    }
    const decode = jwt.verify(token,JWT_SECRET);
    if(decode?.type !== "admin"){
        return res.status(401).json({status:false,message:"You're not Authorized"})
    }
    next();
}catch(err){
    res.status(401).json({status:false,message:"You're not authorized"});
}
}

module.exports = {verifyToken}