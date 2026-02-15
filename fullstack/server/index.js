const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const app = express(); //server creation
app.use(express.json())
app.use(cors());
const mongoDB = require('./config/db')
mongoDB();

const userRoute = require('./rouutes/userRoute')
app.use('/api/user',userRoute);
const userAuth = require('./rouutes/userAuth');
app.use('/api/login',userAuth);

const uploadRouter = require('./rouutes/uploadRoute')
app.use('/api/upload',uploadRouter);
app.listen(process.env.PORT,()=>{
    console.log("Server Running on http://localhost:5000");
    
})