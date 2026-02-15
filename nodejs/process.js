const process = require('process')
const a = require('dotenv');
a.config();
console.log(process.env.url);
console.log(process.env.key);


