const express=require("express");
const profileRouter=express.Router();
const cookieParser=require("cookie-parser");
const User=require("./models/user");
profileRouter.use(cookieParser);



profileRouter.get("/profile",userAuth,async(req,res)=>{
 
try{
    const user=req.user;
    req.send(user);
}catch(err){
    res.status(400).send("ERROR"+ err.message);
}

});


module.exports=profileRouter;

