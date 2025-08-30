const express= require('express');
const app=express();


// THIS MATCH ALL THE HTTP METHOD API CALLS TO /TEST
app.use("/test",(req,res)=>{
    res.send("hello from server");
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



app.listen(3000,()=>{
    console.log("server is  listening on port 3000...");

});   //this means i have created a web server on port 3000 nd my app is listening




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
