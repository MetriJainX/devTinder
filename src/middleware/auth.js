
const jwt=require("jsonwebtoken");
const User=require("../models/user");
     
const userAuth=async(req,res,next)=>{
       //validate my token
     try{
          //read the tokrn from the req cookies
     const{token}=req.cookies;    //do codes ko mix kia h  //cookies me se token extract krna

if(!token){
     throw new Error("token is not found");
}  
   const decodeObj=await jwt.verify(token,"#Crazyworld2004#");     //is verify func me apn token,secret msg pas krdege jo sirf server ko pta hota h
const{_id}=decodeObj;
const user=await User.findById(_id);
if(!user){
throw new Error("user not found");
}
req.user=user;

next();

     }
     catch(err){
          res.status(400).send("ERROR "+err.message);
     }
};

module.exports={userAuth};