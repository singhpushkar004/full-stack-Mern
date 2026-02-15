const mongoose = require('mongoose')

const mongoDB = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Database Connected Successfully");
        
    })
    .catch(()=>{
        console.log("Sorry try again");
        
    })
}
module.exports = mongoDB;
