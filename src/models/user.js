const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:{
        type:String 
    },
    lastName:{type:String},
    gender:{type:String},
    age:{type:Number}

});


// EITEHR U CAN DO LIKE THIS
const User=mongoose.model("User",userSchema);
module.exports=User;



// OR LIKE THIS
// MODULE.EXPORTS=mongoose.model("User",userSchema);