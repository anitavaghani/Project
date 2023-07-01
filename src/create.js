import React, { useState } from "react";
import { addData } from "./store/store/slice/counter";
import {useDispatch} from "react-redux"
 
function Create (){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")

   const dispatch =useDispatch()

    const handleSubmit =(event) =>{
        event.preventDefault();
        // dispatch(addData({id : person[person.len],name: name, email}))
    }

    return(
        <div className="main">
        <div className="form">
            <h3>Add New User</h3>
           <form  onSubmit={handleSubmit}>
            <div className="name">
            <label htmlFor="" className="label">Name :</label>
            <input type="text" name="name" placeholder="Enter name" onChange={e =>setName(e.target.value)} />
            </div>
            <div className="email">
            <label htmlFor="" className="label" >Email :</label>
            <input type="email" name="email" placeholder="Enter email"  onChange={e=>setEmail(e.target.value)}/>
            </div>
            <br />
            <button>Submit</button>
           </form>
        </div>
        </div>
    )
}
export default Create;