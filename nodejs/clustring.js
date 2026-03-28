// clustring 
 const cluster = require('cluster')
const numCPUs = require('os').availableParallelism()
const process = require('process')
const http = require('http')
// console.log(process);
if(cluster.isMaster){
    console.log(`Process Runs on ${process.pid}`);
    for(i=0;i<numCPUs;i++){
        cluster.fork();
    }
    cluster.on('exit',(a,b,c)=>{
        console.log(`process died ${a.process.pid}`);
    })
}else{
    http.createServer((req, res) => {
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

 