const express = require("express");
const path =require('path')
const app = express();
function applyMiddleware(req,res,next){
       console.log(req.method,req.ip,req.hostname);
       next();
}
app.use(applyMiddleware);

 const auth = (req,res,next)=>{
       console.log(req.query.password);
       if(req.query.password=='123')
       {
          next();
       }
       else{
        console.log('maa ki aankh')
        return;
       }
 }

app.get('/',auth,(req,res)=>{
    res.sendFile(path.join(__dirname, "index.js"));
   
})
app.post('/',auth ,(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
   
})
app.listen(8000,()=>{
    console.log(`server is runninr port no 8000`);
})