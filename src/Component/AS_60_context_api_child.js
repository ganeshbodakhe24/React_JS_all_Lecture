import { GlobalInfo } from "./AS_60_context_api_parent";
import AS_60_context_api_super_child from "./AS_60_context_api_super_child";
import { useContext,useState } from "react";
function AS_60_context_api_child(){
    const[day,setDay]=useState("Monday");
    const {appcolor,getDay}=useContext(GlobalInfo);

    return(
        <>
        <h1>{appcolor}</h1>
        <h1 style={{color:appcolor}}>This is the child Component</h1>
        <button onClick={()=>{getDay(day)}}>Click me  to change day</button>
        <AS_60_context_api_super_child></AS_60_context_api_super_child>
        
        </>
    )
}
export default AS_60_context_api_child;