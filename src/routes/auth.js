const express=require("express");
const{validateSignUpData}=require("../utils/validation");
const bcrypt=require("bcrypt");
const User=require("../models/user");
const authRouter=express.Router();   //JUST LIKE const app=express(); SIMILARLY ROUTER EXPRESS.ROUTER SE ATA H 
const jwt=require("jsonwebtoken");

// BELOW ARE THE COPY PASTED APIS FROM APP.JS


// SIGNUP API
authRouter.post("/signup",async(req,res)=>{

try{
    // validation 
    

    validateSignUpData(req);  //ise try ke andr kro taaki koi bhi erroe aaye to catch ho ajye
    const{firstName,lastName,emailId,password,age,gender}=req.body;   // storing the data in func
// encrypting the password
const passwordHash=await bcrypt.hash(password,10);
console.log(passwordHash);


//creating a new instance od user model
const user=new User({
    firstName,lastName,emailId,password:passwordHash,age,gender
});


    await user.save();
    res.send("user added");}
    catch(err){
        res.status(400).send("error saving the user  "+err.message);
    }
    });







// LOGIN API
authRouter.post("/login",async(req,res)=>{
    try{
        const {emailId,password}=req.body;     //request me se email ,password extract kia
         console.log("Login request:", emailId, password);    //
        const user=await User.findOne({emailId:emailId});  //since async tha to await sare func me aaega and we just checked whetehr email exists ro not nd they should be in curly braces coz they are not params
console.log("User found:", user);
        if(!user){
    throw new Error("invalid credentials");
}
const isPasswordValid = await user.passwordValidation(password);
//  console.log("Password valid?", isPasswordValid);
if(isPasswordValid){
    //create a jwt token
    const token=await user.getJWT(); //direct userschema se ye token fetch kr skte h no ned to write all this here 
    // agr ksi bhi func m ye use krna ho firect getJwt krke use kr skte h
    // console.log("Generated token:", token);




res.cookie("token", token, {
  expires: new Date(Date.now() + 8 * 3600000)})
 //adding the token to cookie nd sending it back to the user
 res.send("login successful");
}

else{
    throw new Error("invalid credentials");
}
        
    }
    catch(err){
        res.status(400).send("ERROR  "+err.message);
    }
});


// LOGOUT API
authRouter.post("/logout",async(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
    });res.send("logout successful");
});
module.exports=authRouter;