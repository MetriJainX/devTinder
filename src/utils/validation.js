const validator=require("validator");

const validateSignUpData=(req)=>{   //we will pass out req in this func
    const{firstName,lastName,emailId,password}=req.body;   //ye sari fields extract hogi req me se
 if(!firstName || !lastName){
    throw new Error("these fields anre compulsory");
 }
 else if(firstName.length<4 || firstName.length>50){   //ye schema me bhi check ho jaega to yaha likhna optonal h
    throw new Error("min length required");
 }
 else if(!validator.isEmail(emailId)){
    throw new Error("enter a valid email");
 }
 else if(!validator.isStrongPassword(password)){
   throw new Error("enter a strong pasword");
 }
}



const validateEditProfileData=(req)=>{
   const allowedEditFields=["firstName","skills","lastName","emailId","gender","age","about"];
 return Object.keys(req.body).every((field)=>allowedEditFields.includes(field));

};
module.exports={
   validateSignUpData,validateEditProfileData
};


