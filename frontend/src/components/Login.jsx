import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
 
 const Login = () => {
// creating a state
const [emailId,setEmailId]=useState("mahak@gmail.com");
const [password,setPassword]=useState("Mahak@123");
const[error,setError]=useState("");
const dispatch=useDispatch();
const navigate=useNavigate();

// making a handle func tht will handle my login using axios
const handleLogin=async()=>{
// since we are doing a promise tht will make a lpgin call to login in postman we are using async await
  try{
const res=await axios.post(BASE_URL + "/login",
  {
  emailId,
  password},{withCredentials:true});
  // console.log(res.data);
  dispatch(addUser(res.data));
  return navigate("/");
   
  } 
  catch(err){
    setError(err?.response?.data|| "something went wrong");
    
  }
};

   return (
    <div className="flex justify-center my-10">
     <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title" onClick={handleLogin}>  LOGIN</h2>
<div> 

<fieldset className="fieldset">
  <legend className="fieldset-legend">Email Id:{emailId}</legend>
  <input type="text" value={emailId}
  className="input" 
  onChange={(e)=>setEmailId(e.target.value)}
  />
 
</fieldset>
    </div>
   
    <div> 
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" 
  value={password}
  className="input" 
   onChange={(e)=>setPassword(e.target.value)}
   />
  
</fieldset>
    </div>
<p className="text-red-600">{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" 
       onClick={handleLogin}>login</button>
    </div>
  </div>
</div>
</div>
   );
 };
 
 export default Login;