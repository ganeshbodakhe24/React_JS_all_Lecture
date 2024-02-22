import { useState,useMemo } from "react";
import AS_61_useMemo_child from "./AS_61_useMemo_child";
function AS_61_useMemo(){
    const[add,setAdd]=useState(0);
    const[sub,setSub]=useState(100);
    const multiplication=useMemo(
        function mul(){
            console.log("useMemo")
            return add*10;
        },[add]
    )
    function mul(){
        console.log("Multiply")
        return add*10;
    }

    return(
        <>
        <h1>useMeo fun {multiplication}</h1>
        <h1>simple mul fun {mul()}</h1>
            <h1>add :{add}</h1>
            <h1>sub :{sub}</h1>
            <button onClick={()=>{setAdd(add+1)}}>ADD</button>
            <button onClick={()=>{setSub(sub-1)}}>Sub</button>
            <AS_61_useMemo_child></AS_61_useMemo_child>
        </> 
    )
}

export default AS_61_useMemo;

/*
use memo use to inc effeciency
when there no state change  then function unnecessary not going to call 
*/