import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user", //name of the slice
initialState:null,
reducers:{
    // WHTEVER DATA WILL BE COMING WILL BE ADDED THROUGHT TIS

    addUser:(state,action)=>{
        return action.payload;
    },
    // AND REMOVED VIA THIS
    removeUser:(state,action)=>{
        return null;
    }
}
});

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;