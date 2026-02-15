const express = require('express')
const router= express.Router();
const multer = require('multer')
const User = require('../models/userSchema')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')  
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname)
    }
})

const uploads = multer({storage:storage})

router.put('/:id',uploads.single('file'),async(req,res)=>{
    // const id = req.params.id;
    const user = await User.findByIdAndUpdate(req.params.id,{picture:req.file.path},{new:true})
    res.json(user)
}) 

module.exports = router
