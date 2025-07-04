const express = require("express");
const dotenv = require('dotenv');
const mongoose= require('mongoose')
const vendorRoutes= require('./routes/vendorRoutes')
const bodyParser = require('body-parser')
const firmroutes =require('./routes/firmroutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path')
const app=express()
const PORT = process.env.PORT || 4000;
dotenv.config();
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MonogDB connected successful!"))
.catch((error)=> console.log(error))
app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmroutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));
app.listen(PORT,()=> {
    console.log(`server started and running at ${PORT}`);
})
app.use('/',(req,res)=> {
res.send("<h1> Welcome to YumCart");
})