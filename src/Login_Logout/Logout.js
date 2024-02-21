import { useEffect } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
function Logout(){
    let navigae=useNavigate();
    useEffect(()=>{
        localStorage.setItem("flag",false);
        localStorage.setItem("name",null);

    })
    function goback(){
       
        navigae("/login");
    }
return(
    <>
        <h1>Logouted </h1>
        <button onClick={goback}>Go to Login</button>
    </>
)
}
export default Logout;