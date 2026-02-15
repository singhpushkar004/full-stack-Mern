const http = require('http');
const fs = require('fs')
// console.log(http);
const a = http.createServer((req,res)=>{
   if(req.url=='/about'){
    const c = fs.readFile("six.html",(err,data)=>{
         res.end(data)
    })
   
   }
   if(req.url=='/contact'){
    res.end("<h1>contact page Calling</h1>")
   }
   if(req.url=='/product'){
    res.end("<h1>product page Calling</h1>")
   }
   
});

a.listen(5000,()=>{
    console.log("server running on 5000");
    
})
// console.log(a);

