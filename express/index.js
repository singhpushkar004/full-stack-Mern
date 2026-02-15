const express = require('express')
const app = express();
const mongoDB = require('./config/db')
app.use(express.json()) // middleware for body parsing 


mongoDB();
app.listen(3000,()=>{
    console.log("Server Started");
})