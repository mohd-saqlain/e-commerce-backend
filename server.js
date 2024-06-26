const express = require("express")
const app = express();
const cors = require('cors');
const connectToMongo = require("./db/connection");
const port = 5000;

connectToMongo();
app.use(express.json());
app.use(cors());
app.use(require('./routes/product'))
app.use(require('./routes/order'))
app.use(require('./routes/user'))

app.get('/', async (req,res)=> {
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})