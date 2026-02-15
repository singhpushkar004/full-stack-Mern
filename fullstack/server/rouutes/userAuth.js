const express = require('express')
const User = require('../models/userSchema');
const router = express.Router();

router.post('/', async(req,res)=>{
    const {email,password} = req.body
    const a = await User.findOne({email}).select("password")
    if(!a) return res.json("Invalid Email Address");
    if(a.password==password){
        res.json({
            msg:"Login Successfully",
            id:a._id
        });
    }
    return res.json({msg:"Incorrect Password"})
   
})

module.exports  = router; 