const mongoose = require("mongoose");
const mongoUrl = 'mongodb+srv://saqlainaly:w59rhThu4142wuAs@cluster0.nixfrcw.mongodb.net/Cluster0';

module.exports =  connectToMongo = () => {
mongoose.connect(mongoUrl).then(()=>console.log('Mongo connected')).catch((err)=>console.log(err));
}