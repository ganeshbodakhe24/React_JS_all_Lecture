import { useEffect, } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props){
    const navigae=useNavigate();
    useEffect(()=>{
        let flag=localStorage.getItem('flag');
        // console.log(flag);
        if(flag!="true"){
            // console.log("this is false condition")
            navigae('/login');
        }
        else{
            console.log("Hii")
        }
    
    })
    return(
        <>
        <props.Component></props.Component>
        </>
    )
}
export default Protected;