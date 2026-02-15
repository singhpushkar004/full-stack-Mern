const express = require('express')
const Orders = require('../model/Orders')
const router = express.Router();
router.post('/',async(req,res)=>{

    const ord = await new Orders(req.body);
    ord.save()
    res.json('Order Successfull');
})

router.get('/',async(req,res)=>{

    const ord = await Orders.find().populate('userId','name email');
    res.json(ord);
})
module.exports = router;