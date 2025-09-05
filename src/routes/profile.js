const express=require("express");
const profileRouter=express.Router();
const cookieParser=require("cookie-parser");
const User=require("../models/user");
profileRouter.use(cookieParser());
const {userAuth}=require("../middleware/auth");
const { validateEditProfileData } = require("../utils/validation");

profileRouter.get("/profile/view",userAuth,async(req,res)=>{
 
try{
    const user=req.user;
    res.send(user);
}catch(err){
    res.status(400).send("ERROR"+ err.message);
}

});


profileRouter.patch("/profile/edit",userAuth,async(req,res)=>{
try{const data = req.body; 
    if(!validateEditProfileData(req)){
        throw new Error("invalid edit request");
    }
    const loggedinuser=req.user;
    Object.keys(data).forEach((field) => {
      loggedinuser[field] = data[field];
    });

    await loggedinuser.save();   // save updates to DB

    res.json('Profile updated successfully ✅',{data:loggedinuser});
  }

catch(err){
res.status(400).send("ERROR:"+err.message);
}
});

module.exports=profileRouter;

