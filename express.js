const express = require("express");
const path =require('path')
const app = express();
function applyMiddleware(req,res,next){
       console.log(req.method,req.ip,req.hostname);
       next();
}
app.use(applyMiddleware);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "index.js"));
   
})
app.listen(8000,()=>{
    console.log(`server is runninr port no 8000`);
})