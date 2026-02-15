const jwt = require('jsonwebtoken')
const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization
    try{
        console.log(req.req);
        
         jwt.verify(token,process.env.JWT_SECRET)
        next();
    }catch(er){
        res.json("Unauthorized User")
    }
}
module.exports = verifyToken;