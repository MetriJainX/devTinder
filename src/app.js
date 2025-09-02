const express= require('express');
const app=express();


app.listen(7777,()=>{
    console.log("server is  listening on port 7777...");

});   //this means i have created a web server on port 3000 nd my app is listening


// THIS MATCH ALL THE HTTP METHOD API CALLS TO /TEST
app.use("/test",(req,res)=>{
    res.send("hello from server");  //if we write /test route then server will only listen to req which have /test inside it
    
});




app.use("/user",(req,res)=>{
    res.send("helo from server user");
});


// THIS WILL ONLY MATCH TEST CALLS TO /USER
app.get("/user",(req,res)=>{
res.send({firstname:"metri",lastname:"jain"})
});


// MAKING A POST CALL
app.post("/user",(req,res)=>{
    res.send("post call made succesfull.")
});



// TO DELETE A USER
// app.delete("/user",(req,res)=>{
//     res.send("delete made...");
// });


app.use("/hello" ,(req,res,next)=>{
    console.log("1 response");
     res.send("hello hello hello");
    next();
},
(req,res)=>{
    console.log("second response running");
    res.send("2 response");
});
// app.use("/",(req,res)=>{
//     res.send("only slash");
// });





// MIDDLEWARES USE 
// EITHER U CAN WRITE THIS OR USE THE THE TYPICAL METHOD OR IMPOSTING EXPORTING IN THE MIDDLEWAREE FILE

// app.use("/admin",(req,res,next)=>{
// console.log("checking admin login");
// const token="xyz";
// const isAdmin=(token=== "xyz");
// if(!isAdmin)
//      {res.status(401).send("unauthorised access");}
// else {next();

// }
// });


// IMPORTING THROUGH MIDDLEWARES FILE
// const Adminauth=require("./middleware/auth");
// app.use("/admin",Adminauth);

// app.get("/admin/getalldata",(req,res,next)=>{
//     res.send("user data send");
// });

// app.get("/admin/deletedata",(req,res,next)=>{
// res.send("deleted user data");
// });

// app.get("/admin/login",(req,res,next)=>{
// res.send()
// });


// OR U CAN DO THE UPPER PART LIKE THIS ALSO
const Adminauth=require("./middleware/auth");
// app.use("/admin",Adminauth);

app.get("/admin/getalldata",Adminauth,(req,res,next)=>{
    res.send("user data send");
});

app.get("/admin/deletedata",Adminauth,(req,res,next)=>{
res.send("deleted user data");
});

app.get("/admin/login",(req,res,next)=>{
res.send("login amde!");   
//REMEMBER HERE ITS JUST LOGIN SO WE DONT NEED AUTHORIZATION SO WE DIDNT USED ADMINAUTH

});





require("./config/database");





const User=require("./models/user");
app.use(express.json());
// app.post("/signup",async(req,res)=>{
//     console.log(req.body);

//     // CREATING A NEW INSTANCE OF USER MODEL
//     const user=new User({
//         firstName:"sid",
//         lastName:"jain",
//         emailId:"difn@gmail.com",
//         age:27,
//     });
//     try{
//     await user.save();
//     res.send("user added");}
//     catch(err){
//         res.status(400).send("error saving the user"+err.message);
//     }
// });



// or do this
app.post("/signup",async(req,res)=>{
    const user=new User(req.body);

  try{
    await user.save();
    res.send("user added");}
    catch(err){
        res.status(400).send("error saving the user"+err.message);
    }
    });
// THE 2 CODES BELOW ARE FOR ADDING GENDER TO PREVIOUSBUT I COULDNT DO THT
// app.post("/users", async (req, res) => {
//   const user = new User(req.body);

//   if (!gender) {
//     return res.status(400).json({ error: "Gender is required" });
//   }

// //   const user = new User({ firstName, lastName, age, emailId, gender });
//   await user.save();
//   res.status(201).send(user);
// });


// app.put("/users/:id", async (req, res) => {
//   const updateData = req.body;

//   if (!updateData.gender) {
//     updateData.gender = "Not Specified"; // or throw an error
//   }

//   const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });
//   res.send(user);
// });  

// get user by email
    app.get("/signup",async(req,res)=>{
        const username=req.body.firstName;
          try{
            const user=await User.find({firstName:username});
            if(user.length===0){res.status(404).send("user not found");}
           else{res.send(user);} 
          }
          catch(err){
            res.status(400).send("something went wrong");
          }
    });
    
    // if we didnt passed anything in the find it will ruturn all docs
 app.get("/all",async(req,res)=>{
   try{ const user=await User.find({});
    res.send(user);}
    catch(err){
        res.status(400).send("something went wrongg");
    }

 });



 app.delete("/del",async(req,res)=>{
    const userid=req.body.userid;
    try{
        const user=await User.findByIdAndDelete({_id:userid});
        res.send("user deleted");
    }
    catch(err){
        res.status(400).send("somethig went wrong");
    }
 });


//  to update the userdata
app.patch("/update/:userid",async(req,res)=>{
    const data=req.body;
    const userid=req.params?.userid;
// console.log(data);

    try{
        const allowedUpdates=["age","about","skills","gender"];
        
        // chceck krne ki given data ki hr ek key ke liye allowed_updates true h ki ni
        const isUpdatedAllowed=Object.keys(data).every((k)=>
            allowedUpdates.includes(k)
        );

        // agr update allow ni h to error bhejne
        if(!isUpdatedAllowed){
            throw new Error("updates not allowed");
        }
        if(data?.skills.length>10){
            throw new Error("skills cant be more then 10");
        }

       const user= await User.findByIdAndUpdate(userid,data,{
            returnDocument:"before",runValidators:true});
        console.log(user);
        res.send("user updated ache se");
    }catch(err){
        res.status(400).json({ error: err.message });
};
    }
);