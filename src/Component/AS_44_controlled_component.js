import React, {useState} from "react";

function AS_44_controlled_component(){
    let[val,setVal]=useState("");
    let[item,setItem]=useState("");

    return(
        <>
        <h1>{val}</h1>
        <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}></input>
        <input type="text" defaultValue="Ganesh" onChange={(e)=>{setItem(e.target.value)}}></input>
        <h1> item : { item}</h1>

        </>
    )
}
export default AS_44_controlled_component;

// by useing the state we can control the input field this is the controlle component 
//