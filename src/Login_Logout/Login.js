import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){
    let[name,setName]=useState();
    let navigae=useNavigate();
        useEffect(()=>{
            let flag=localStorage.getItem('flag');
            if(flag=="true"){
                navigae('/');
            }
        })    
        function login(){
            localStorage.setItem('flag',true);
            localStorage.setItem('name',name);
        }
    return(
        <>
        <div style={{textAlign:"center" , marginTop:"40px"}}>
        <form onSubmit={login}>
        <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} required></input>
        <br></br>
        <br></br>
        <input type="text" placeholder="Password" required></input>
        <br></br>
        <br></br>
        <button>Login</button>
        </form>

        </div>
        </>
    )
}
export default Login;