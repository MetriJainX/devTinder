import axios from "axios";
import {BASE_URL} from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import { useEffect } from 'react';
import UserCard from "./userCard"; 

const Feed = () => {
  const feed=useSelector((store)=>store.feed);  //to 
  // read the feed we use useSelector which gives us acccess to store   
const dispatch=useDispatch();    //this is to add the feed

  const getFeed=async()=>{
    if(feed) return;
    try{
       const res=await axios.get(BASE_URL+"/feed",{
      withCredentials:true});
dispatch(addFeed(res?.data?.data));
  }catch(err){
console.log(err);
  }

};
useEffect(()=>{
  getFeed();
},[]);
return (
feed && 
<div className="flex justify-center my-10 rounded-xl"> 
  <UserCard user={
    feed[0]}/>
</div>);
};

export default Feed;