// modules -> modules are the files that can use another file . 
// there three types of modules 
/*
1. predefined module
    Ex- fs , http, os,crypto, path ,stream etc .  
2. user defined module
    Ex- that can you define
3. third party modules
    Ex - express , mongoose , axios , socket-io , cors , body-parser etc .. 
    
There are two types of Developing the module 
1. Common Js (node js )
2. ESM(Ecma Script Module)
*/ 
// common js
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b 
}
module.exports = {add,sub};