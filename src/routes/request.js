const express=require("express");
const reqRouter=express.Router();
const {userAuth}=require("../middleware/auth");
const User=require("../models/user");
const ConnectionRequest=require("../models/connectionRequest");

reqRouter.post("/request/send/:status/:toUserId",  //SBSE PHLE USERAUTH CALL HOGA JISME SE REQ BOLE TOH LOGIN WALA USER AAEGA ND WAHI FROMUSERID ME JAAEGA 
    userAuth,async(req,res)=>{
  try{
    
const fromUserId=req.user._id;
const toUserId=req.params.toUserId.trim();   //API ME PASS KREGE
const status=req.params.status;  //ALLOWED STATUS ME SE HOGA TO RUN HO JAEGA OTHERWISE ERROR AAJAEGA

const allowedStatus=["interested","ignore"];  //allowed dtatus me bhi agr sirf interested ya ignore h to uspe req bhjna h 
if(!allowedStatus.includes(status)){
   return res.status(400).json({message: "invalid status type: "+status});

}

// if there is an already existing req
const existingConnectionRequest=await ConnectionRequest.findOne({
  $or:[{
    fromUserId,toUserId},{toUserId:fromUserId,fromUserId:toUserId}]
});
if(existingConnectionRequest){
  return res.status(400).send({message:"connection req already exists"});

}

// if user is not existing user
const toUser=await User.findById(toUserId);
if(!toUser){
  return res.status(400).json({message:"user dosnt exists"});
}

//if fromuser=touser will be chcked before save using schmea methods


const connectionRequest=new ConnectionRequest({  //INSTANCE BANAYa
    fromUserId,toUserId,status
});


const data=await connectionRequest.save(); //DATA SAVE KRWAYA ND JSON FORM ME OUPUT KRWA DIA
res.json({
    message:req.user.firstName +" is "+status +" in "+ toUser.firstName,
    data,
});
  }
  catch(err){
    res.status(400).send("ERROR"+ err.message);
  }
 

});

module.exports=reqRouter;
