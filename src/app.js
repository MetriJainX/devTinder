const express= require('express');
const app=express();
app.use("/test",(req,res)=>{
    res.send("hello from server");
});
app.listen(7777,()=>{
    console.log("server is  listening on port 3000...");

});   //this means i have created a web server on port 3000 nd my app is listening

