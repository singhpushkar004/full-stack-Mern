const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
    },

},{
    timestamps:true
})
module.exports = mongoose.model("Orders",ordersSchema);
