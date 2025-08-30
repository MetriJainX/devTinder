const express= require('express');
const app=express();
app.use("/",(err,req,res,next)=>{
    if(err){
        // log your error
        res.status(500).send("somethung went wrong");

    }
});


app.get("/getuserdata",(req,res)=>{
    // try{
    // logic od db call and get user data
    
    throw new error("dhjsbj");
    res.send("user data sent");
// } catch(err) {
// res.status(500).send("somethig went wrong");}
});
  

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("somethig went wrong");
    }
});