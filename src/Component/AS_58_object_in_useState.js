import { useState } from "react";

function AS_58_object_in_useState(){
    const[data,setData]=useState({name:"Ganesh",age:33})
    return (
        <>
        <div style={{textAlign:"center"}}>

            {/* <input value={data.name} type="text"
            onChange={(e)=>{setData({age:data.age,name:e.target.value})}}
            ></input>
            <br></br><br></br>
            <input value={data.age} type="number"
            onChange={(e)=>{setData({name:data.name,age:e.target.value})}}
            ></input>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1> */}


            {/* second way */}


            <input value={data.name} type="text"
            onChange={(e)=>{setData({...data,name:e.target.value})}}
            ></input>
            <br></br><br></br>
            <input value={data.age} type="number"
            onChange={(e)=>{setData({...data,age:e.target.value})}}
            ></input>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
            </div>
        </>
    )
}

export default AS_58_object_in_useState;