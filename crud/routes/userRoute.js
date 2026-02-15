const express = require('express')
const router = express.Router();
const User = require('../model/User');

router.get('/abc',(req,res)=>{

    res.json("User Api Called")
})

router.post('/', async(req,res)=>{
    const {email,mobile} = req.body;
    const a = await User.findOne({email:email},{mobile:mobile});
    //for email validation
 
    if(a){
        return res.json('Email ALready Exist');
    }
    

   const user=  await new User(req.body).lean();
   user.save();
    res.json(a)

})

router.delete('/:id',async(req,res)=>{

    const user = await User.findByIdAndDelete(req.params.id);
    res.json("User Deleted Successfully");
})

router.put('/:id',async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(user)

})
module.exports = router;