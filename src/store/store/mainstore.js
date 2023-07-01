import {configureStore} from "@reduxjs/toolkit";
import { personSlice } from "./slice/counter";


export const mainstore = configureStore({
    reducer :{
        person :personSlice.reducer
    }
})