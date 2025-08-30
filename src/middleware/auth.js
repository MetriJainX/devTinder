const Adminauth=(req,res,next)=>{
console.log("checking admin login");
const token="xyz";
const isAdmin=(token=== "xyz");
if(!isAdmin)
     {res.status(401).send("unauthorised access");}
else {next();

}
};
module.exports=Adminauth;

