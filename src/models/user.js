const mongoose=require("mongoose");
const validator=require("validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const userSchema=new mongoose.Schema({
    firstName:{ required:true,
        type:String 
    },
    lastName:{
        type:String},
    gender:{required:true,
        validate(value){
        if(!["male","female","others"].includes(value)){
            throw new Error("gender is not valid");
            
        }
    },
        type:String},

    age:{required:true,min:18,max:55,type:Number},

    emailId:{required:true,
        trim:true,
        type:String,
        validate(value){
if(!validator.isEmail(value)){
throw new Error("invalid email "+value);
}        }
        },
    about:{type:String,validate(value){
if(validator.isInt(value)){
    throw new Error("type a string" + value);
}
    },
    default:"im an indian"},
    skills:{
        type:[String]
    },
    password:{
        type:String,
        validate(value){
if(!validator.isStrongPassword(value)){
    throw new Error("eneter a strong password" + value);
}
        }
    }
},{timestamps:true});


// EITEHR U CAN DO LIKE THIS

// OR LIKE THIS
// MODULE.EXPORTS=mongoose.model("User",userSchema);


userSchema.methods.getJWT=async function(){
    const user=this;
    const token=await jwt.sign({_id:user._id},"#Crazyworld2004#",{expiresIn:"2d"});
    return token; 
  };

  userSchema.methods.passwordValidation=async function(passwordInputByUser){
    const user=this;
    const passwordHash=user.password;
    const isPasswordValid=await bcrypt.compare(passwordInputByUser,passwordHash); 
    return isPasswordValid;  //decrpted pw return krrhe h 
  };
  const User=mongoose.model("User",userSchema);
module.exports=User;