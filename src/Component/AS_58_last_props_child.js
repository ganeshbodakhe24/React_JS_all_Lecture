import React from "react";
import { useState, useRef,useEffect } from "react";

function AS_58_last_props_child(props){

    let preval=useRef();
    useEffect(()=>{
        preval.current=props.count;
    })
    let data=preval.current;
    return(
        <>
        <h1 style={{textAlign:"center"}}>previous value {data} </h1>
        <h1 style={{textAlign:"center"}}>current value {props.count} </h1>
        </>
    )
}
export default AS_58_last_props_child;