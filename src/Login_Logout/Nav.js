import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function Nav(){
  let[flag ,setFlag]=useState();
  useEffect(()=>{
    setFlag(localStorage.getItem("flag"));
    console.log(flag);
  })
    return(
      <>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/login'>Login</NavLink>
        {
          flag =="true" ? <NavLink to='logout'>Logout</NavLink> : ""

        }
        
        </div>
      </>
    )
}
export default Nav;