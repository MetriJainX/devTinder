const mongoose=require("mongoose");
const connectionReqSchema=new mongoose.Schema(
    {
        fromUserId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
        },
        toUserId:{type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        status:{
            type:String,required:true,
            enum:{
                values:["ignore","interested","accepted","rejected"],
                message:"{value} is incorrect status type",
            },
        },
    },{
        timestamps:true
    }
);
//compound indexing
connectionReqSchema.index({fromUserId:1,toUserId:1});

//pre function
connectionReqSchema.pre("save",function(next){
    const connectionRequest=this;
    //chck if fromuserid=touserid
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("cant send req to yourself");
    }
    next();
});


const ConnectionRequestModel=new mongoose.model("ConnectionRequestModel",connectionReqSchema);
module.exports=ConnectionRequestModel;


// NOW WE WILL WRITE API REQ TO SEND CONNECTION REQ in request.js