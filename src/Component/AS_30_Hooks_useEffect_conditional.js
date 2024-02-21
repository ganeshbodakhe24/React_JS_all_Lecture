import React,{useEffect,useState} from "react";

function AS_30_Hooks_useEffect_conditional(){
    const[count,setCount]=useState(0);
    const[data,setData]=useState(100);
    useEffect(()=>{
        console.log("on update Data ",data);
    },[data]);
    useEffect(()=>{
        console.log("on update count",count);
    },[count])
    return(
        <>
            <h1>Count :{count}</h1>
            <h1>Data:{data}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count Update</button>
            <button onClick={()=>{setData(data+1)}}>inc Data</button>
        </>
    )
}
export default AS_30_Hooks_useEffect_conditional;


// due to conditon when data update use efffect of data is call 
//when count is updated then useeffect of the count is call 