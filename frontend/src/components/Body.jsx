import{Navigate, Outlet, useNavigate} from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import {BASE_URL} from "../utils/constants";
import {useDispatch,useSelector} from "react-redux";
import Footer from "./Footer";
import { useEffect } from "react";
import {addUser } from "../utils/userSlice";

const Body = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const userData=useSelector((store)=>store.user);
  
  const fetchUser=async()=>{
    if(userData) return;
    try{
    const res=await axios.get(BASE_URL+"/profile/view",
      {withCredentials:true,
    });
    dispatch(addUser(res.data));

  }catch(err){
    if (err.response && err.response.status === 401) {
  navigate("/login");
  
}

  } ;

  useEffect(()=>{
    fetchUser();
  },[]);
  }
  return (
    <div  className="min-h-screen flex flex-col">
        <NavBar/>

        {/* body ke andr jitne childrren h will render over here in outlet*/}
         <div className="flex-grow">
        <Outlet />
      </div>
        <Footer/>
    </div>
  );
};

export default Body;