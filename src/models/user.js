const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:{ required:true,
        type:String 
    },
    lastName:{
        type:String},
    gender:{required:true,validate(value){
        if(!["male","female","others"].includes(value)){
            throw new error("gender is not valid");
            
        }
    },
        type:String},

    age:{required:true,min:18,max:55,type:Number},

    emailId:{required:true,trim:true,
        type:String},
about:{type:String,
    default:"im an indian"}
},{timestamps:true});


// EITEHR U CAN DO LIKE THIS
const User=mongoose.model("User",userSchema);
module.exports=User;



// OR LIKE THIS
// MODULE.EXPORTS=mongoose.model("User",userSchema);