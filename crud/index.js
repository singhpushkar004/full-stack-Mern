const express = require('express')
const app = express(); // server create
const dotenv = require('dotenv');
dotenv.config();
const mongoDB = require('./config/db');
mongoDB();

app.use(express.json())



const userRouter =  require('./routes/userRoute');
app.use('/api/user/',userRouter);

const orderRouter = require('./routes/orderRoute')
app.use('/api/order',orderRouter);

const userAuth = require('./routes/userAuth')
app.use('/api/login',userAuth);
// start the serve
app.listen(process.env.PORT,()=>{
    console.log("Server Created");
    
})