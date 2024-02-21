import React,{useState,useEffect} from "react";

function AS_29_hooks_useEffect(){
    const[count,setcount]=useState(0);
    useEffect(()=>{
        console.log(count);
    })
    return(
        <>
        <h1>count {count}</h1>
        <button onClick={()=>{setcount(count+1)}}> inc count</button>
        </>
    )
}

export default AS_29_hooks_useEffect;