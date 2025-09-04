const express=require("express");
const reqRouter=express.Router();

const User=require("./models/user");

reqRouter.post("/sendConnectionReq",userAuth,async(req,res)=>{
    const user=req.user;
    //sending a connection request
    console.log("senidng a connection req");
    req.send(user.firstName+ "sent the connect req");
});

module.exports=reqRouter;
