const mongoose = require('mongoose')

const mongoDB = ()=>{
   mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
    console.log("DB Connected");
    
   })
   .catch((er)=>{
    console.error(er);
    
   })
}

module.exports = mongoDB;