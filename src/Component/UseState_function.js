
import {useState} from "react";

function UseState_function(){
    const[data,setData]=useState("Ganesh");
    function nameChange(){
        // alert("change name");
        setData("sham");
    }
   
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={nameChange}>Change Name</button>
           
        </div>
    )
}

export default UseState_function;