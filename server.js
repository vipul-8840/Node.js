// const express = require('express');
// const server = express();
// server.listen(8080,()=>{
//      console.log(`server listen port no : ${8080}`);
// });
// const http = require('http');
// const server = http.createServer((req,res)=>{
//       console.log("server started ");
//       res.end("hello")
// })
// console.log("hello world");
// server.listen(8000,()=>{
//      console.log(`server listend this port no 8000`);
// });
// const http = require('http');
// const data = {
//       name:"vipul",
//       age :23
// }
// const server = http.createServer((req,res)=>{
//      console.log(req.url);
//      res.setHeader('Content-Type', 'text/html');
//      res.end('<h1>html</h1>');
       
// })
// console.log('hello')
// server.listen(8000,()=>{
//      console.log('serve is listen on port no 8000')
// })

// const http = require('http');
// const fs = require('fs');
// const index = fs.readFile('index.html','utf-8',(err,text)=>{
//      return text;
// })
// const  server = http.createServer((req,res)=>{

//      console.log('server started');
//         res.setHeader('Content-Type','text/html');
//        res.end(index);

// })
// server.listen(8000,()=>{
//      console.log(`server is running on port no 8000`)
// })

// const http = require('http')
// const fs = require('fs');

// const data = fs.readFileSync('db.json','utf-8')
// const server = http.createServer((req,res)=>{
//      console.log('server started');
//      res.setHeader('Content-Type','application/json');
//      res.end(data);
// })
// server.listen(8000,()=>{
//      console.log('server is listen on this port no 8000')
// })