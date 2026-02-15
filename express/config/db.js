const mongoose = require("mongoose");

const mongoDB=()=>{
    mongoose.connect("mongodb://localhost:27017/yasir")
    .then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch(()=>{
        console.log("Sorry Try again later");
        
    })
}
module.exports = mongoDB;