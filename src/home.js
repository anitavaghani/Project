import React from "react";
import './home.css';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Home(){

    let person=useSelector((state)=>state.person)
  console.log(`====>> data`,person)

   
     
    return(
        <div  className="table">
            <Link  to="/create">   <button>Create +</button></Link>
        <table className="table">
          <thead>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              
          </thead>

    {
        person.map((item,index)=>{
            console.log(`====>> item`,item)
            return(
            
                <>
             
         <tr>
            <td>{item.id}</td>
            <td>{ item.name}</td>
            <td>{item.email}</td>
            <td>
                <button  className="btn1">Edit</button>
               
            </td>
            <td> <button  className="btn1">Delete</button></td>
             
         </tr>

                </>
            )
        })
     }       
  </table>
        </div>
    )
}
export default Home