import { createSlice } from "@reduxjs/toolkit";
// import {userlist} from "./data"
import { userlist } from "../../../data";

 
export const personSlice= createSlice({
    name :"person",
    initialState :userlist ,
    reducers :{
        addData :(state,action)=>{
            console.log(`====>> `,action)
        }
    }
})
export const {addData} = personSlice.actions;
export const counterActions= personSlice.actions