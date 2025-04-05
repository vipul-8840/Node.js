// const lib =require('./lib')

// console.log(lib.sum(4,5),lib.diff(5,4));
// console.log(lib);
// import {sum,diff} from './lib';

// console.log(sum(4,5),diff(5,4));
// console.log(lib);

// const fs = require('fs');
// const text = fs.readFileSync('vipul.txt','utf-8');
// console.log(text);
// console.log("hello senorita")
const fs = require('fs');
const text = fs.readFile('vipul.txt','utf-8',(err,txt)=>{
    console.log(txt);
})

console.log("982773")