// streaming 
const fs = require('fs')
const http = require('http')


const server = http.createServer((req,res)=>{
  if(req.url=='/'){
    fs.ReadStream("data.txt",(err,msg)=>{
        if(err) throw err;
        res.end(msg)
    })
  }
})
server.listen(5000,()=>{
    console.log("Server Started");
})

// RTMP => real time messaging protocol
