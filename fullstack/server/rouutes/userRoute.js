const express = require('express')
const router =  express.Router();
const User = require('../models/userSchema')
const multer = require('multer')
router.post('/',async(req,res)=>{

    const user = await new User(req.body)
    user.save()

    res.json("User Registered Successfully")
})
router.get('/',async (req,res)=>{
    
    const user = await User.find();
    res.json(user);
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params 
    const user = await User.findByIdAndDelete(id);
    res.json("User Deleted Successfully")
})
router.put('/:id',async(req,res)=>{

    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(user)
})






module.exports = router;  