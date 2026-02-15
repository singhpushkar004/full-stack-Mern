const express = require('express')
const User = require('../model/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken')
router.post('/',async(req,res)=>{
    const {email,password}  = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.json("User Not Found");
    }
    if(user.password==password){

        const token = jwt.sign({payload:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})

        return res.json(token);
    }


    return res.json("Password not Matched")
})

router.get('/',verifyToken ,async(req,res)=>{
    // console.log(req);
    res.json("Ok verified")  
})


module.exports = router